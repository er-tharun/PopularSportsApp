import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})

export class Constants {
    public readonly baseURL : string = 'http://localhost:5215';
    public readonly REGISTER : string = '/register';
    public readonly LOGIN : string = '/login';
    public readonly MAP_USER_TO_ROLE : string = '/api/Roles/MapUserToRole';
    public readonly GET_ROLES : string = '/api/Roles/GetRoles';
    public readonly GET_USERS : string = '/api/Roles/GetUsers';
    public readonly GET_SPORT : string = '/api/PopularSports/GetSport';
    public readonly ADD_SURVEY : string = '/api/Survey/AddSurvey';
    public readonly GET_LEADINGSURVEY : string = '/api/Survey/LeadingSurvey';
    public readonly GET_SURVEYS : string = '/api/Survey/GetSurveys';
}