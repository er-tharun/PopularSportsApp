import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  userName : string;
  constructor(private cookieService : CookieService) {
    this.userName = this.cookieService.get('email');
  }
}
