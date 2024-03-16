import { CanActivateFn,Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { inject, Injectable } from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
    if(inject(AuthService).isUserLoggedIn())
        return true;
    else
        return (inject(Router).navigate(['/login']));
};
