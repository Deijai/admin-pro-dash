import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('googleBtn') googleBtn!: ElementRef;

  public loginForm: FormGroup = this.fb.group({
    email: [
      localStorage.getItem('email') || '',
      [Validators.required, Validators.email],
    ],
    password: ['', [Validators.required]],
    remember: [false],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit(){
    google.accounts.id.initialize({
      client_id:
        "765552556384-fd3qtvsga55rmfcs52d22ua9j5t39apl.apps.googleusercontent.com",
      callback: (response: any) => this.handleCredentialResponse(response),
    });
    google.accounts.id.renderButton(
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" } // customization attributes
    );
  }

  handleCredentialResponse(response: any){
    console.log("Encoded JWT ID token: " + response.credential);
    this.userService.loginGoogle(response.credential).subscribe({next: () => {
      this.router.navigateByUrl('/');
    }, error: (err) => {
      Swal.fire('Error: ', err.error.message, 'error');
    }});
  }

  public login() {
    const remember = this.loginForm.get('remember')?.value;
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe({
        next: value => {
          if (remember) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
          } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
          }
          this.router.navigateByUrl('/');
        },
        error: err =>{
          Swal.fire('Error: ', err.error.message, 'error');
        },
      });
    }
  }
}
