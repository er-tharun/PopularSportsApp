import { Injectable } from '@angular/core';
import { Constants } from '../app/config/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sport } from '../app/models/Sport';
import { Survey } from '../app/models/Survey';
import { CookieService } from 'ngx-cookie-service'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http : HttpClient,
    private constants : Constants,
    private cookieService : CookieService) { }

  /*httpOptions = {
    headers : new HttpHeaders(
      {
        'Access-Control-Allow-Origin' : '*',
        "Authorization" : "Bearer "+ this.cookieService.get("accessToken")
      }
    )
  }*/
  
  getSports() : Observable<Array<Sport>> {
    return this.http.get<Array<Sport>>(this.constants.baseURL + this.constants.GET_SPORT);
  }

  getLeadingSport() : Observable<Survey> {
    return this.http.get<Survey>(this.constants.baseURL + this.constants.GET_LEADINGSURVEY);
  }

  castVote(id : any) : Observable<any> {
    return this.http.post(this.constants.baseURL+this.constants.ADD_SURVEY+"?sportId="+id,null);
  }

  getSurveys() : Observable<Array<Survey>> {
    return this.http.get<Array<Survey>>(this.constants.baseURL + this.constants.GET_SURVEYS);
  }
}
