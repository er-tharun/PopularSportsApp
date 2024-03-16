import { Component } from '@angular/core';
import { AuthService } from '../app/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PopularSportsApp';
  constructor(private authService : AuthService,
  private cookieService:CookieService,
  private router : Router) {

  }
  isUserLoggedIn : boolean = this.authService.isUserLoggedIn();
  userName : string = this.authService.getLoginUserName();

  logOut() : void {
    this.cookieService.deleteAll();
    this.isUserLoggedIn = false;
    this.router.navigate(['']);
  }
}
