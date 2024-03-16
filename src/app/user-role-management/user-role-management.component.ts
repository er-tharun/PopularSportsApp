import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/User';
import { Role } from '../models/Role';
import { UserRoleMap } from '../models/UserRoleMap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-role-management',
  templateUrl: './user-role-management.component.html',
  styleUrl: './user-role-management.component.css'
})
export class UserRoleManagementComponent {
  users : Array<User> = [];
  roles : Array<Role> = [];
  constructor(private authService:AuthService,
  private router : Router) {
    this.authService.getUsers().subscribe(data => {
      this.users = data;
    },
          (err) => {
        alert('User dont have access');
      this.router.navigate(['']);
      }
      );
    this.authService.getRoles().subscribe(data => {
      this.roles = data;
    }
    
    );
  }

  mapUserToRole(userName:string, roleName:string) :void {
    console.log(userName, roleName);
    this.authService.mapUserToRole(new UserRoleMap(roleName, userName)).subscribe(
      data => {
        window.alert('user role mapping successfull');
      },
      (err) => {
        alert('User dont have access');
      this.router.navigate(['']);
      }
    );
  }
}
