import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { UserRegister } from '../interfaces/user-register.interface';
import { environment } from '../../environments/environment';
import { UserLogin } from '../interfaces/user-login.interface';

import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const baseUrl: string = environment.baseUrl;
declare const google: any;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  public tokenValidate(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return this.http
      .get(`${baseUrl}/auth/login/renew`, {
        headers: {
          'x-token': token,
        },
      })
      .pipe(
        tap((resp: any) => localStorage.setItem('token', resp.token)),
        map((token) => true),
        catchError( error => of(false))
      );
  }

  public create(userRegister: UserRegister) {
    return this.http.post(`${baseUrl}/users/new`, userRegister).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  public login(userLogin: UserLogin) {
    return this.http.post(`${baseUrl}/auth/login`, userLogin).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  public loginGoogle(token: string) {
    return this.http.post(`${baseUrl}/auth/login/google`, { token }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  public logout(){
    localStorage.removeItem('token');

    google.accounts.id.revoke('djairn18@gmail.com', () => {
      this.router.navigateByUrl('/login');
    });
  }
}
