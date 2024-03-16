import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../app/config/constants';
import { Login } from '../app/models/login';
import { LoginResponse } from '../app/models/LoginResponse';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from '../app/models/User';
import { Role } from '../app/models/Role';
import { Register } from '../app/models/Register';
import { UserRoleMap } from '../app/models/UserRoleMap';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient,
    private constants : Constants,
    private cookieService : CookieService
  ) { }

  /*httpOptions = {
    headers : new HttpHeaders(
    {
      'Access-Control-Allow-Origin' : '*'
    }
  )
  };*/

  login(data : Login) {
    return this.httpClient.post<LoginResponse>(this.constants.baseURL + this.constants.LOGIN, data);
  }

  register(data : Register) {
    return this.httpClient.post(this.constants.baseURL+this.constants.REGISTER, data);
  }

  isUserLoggedIn() : boolean {
    return this.cookieService.check("email");
  }

  getLoginUserName() : string {
    return this.cookieService.get("email");
  }

  getUsers() : Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.constants.baseURL+this.constants.GET_USERS);
  }

  getRoles() : Observable<Array<Role>> {
    return this.httpClient.get<Array<Role>>(this.constants.baseURL+this.constants.GET_ROLES);
  }

  mapUserToRole(data : UserRoleMap) : Observable<object> {
    return this.httpClient.post(this.constants.baseURL+this.constants.MAP_USER_TO_ROLE, data);
  }
}
