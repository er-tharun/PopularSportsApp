import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Login } from '../models/login';
import { LoginResponse } from '../models/LoginResponse';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginFormGroup : FormGroup = new FormGroup(
    {
      email : new FormControl(''),
      password : new FormControl('')
    }
  );
  loginSuccess : boolean = false;
  constructor(private authService:AuthService,
    private cookieService:CookieService,
    private appComponent:AppComponent,
    private router : Router) {

  }
  login() : void {
    var data : any = this.loginFormGroup.value;
    this.authService.login(new Login(data['email'], data['password'])).subscribe(
      obj => {
        this.cookieService.set("accessToken", obj.accessToken, new Date(new Date().getTime()+300000));
        this.cookieService.set("email", data['email'], new Date(new Date().getTime()+300000));
        this.appComponent.isUserLoggedIn = this.authService.isUserLoggedIn();
        this.appComponent.userName = this.cookieService.get('email');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Invalid userName / password');
      }
    );
  }
}
