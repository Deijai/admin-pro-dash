import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmitted: boolean = false;

  public registerForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
    termos: [false, [Validators.required]],
  }, {
    validators: this.passwordIguais('password', 'password2'),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public createUser(): void {
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if(this.registerForm.valid){
      console.log('Formulário valido');

    }

  }

  public campoInvalido(campo: string): boolean {
    return this.registerForm.get(campo)?.invalid && this.formSubmitted ? true : false;
  }

  public validarPassword(): boolean {
    const password = this.registerForm.get('password')?.value;
    const password2 = this.registerForm.get('password2')?.value;

    if((password !== password2) && this.formSubmitted){
      return true;
    } else {
      return false;
    }


  }

  public aceitarTermos(): boolean {
    return !this.registerForm.get('termos')?.value && this.formSubmitted ? true : false;
  }

  private passwordIguais(password: string, password2: string) {


    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(password);
      const pass2Control = formGroup.get(password2);

      if(pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({
          diferente: true,
        })
      }
    };
  }

}
