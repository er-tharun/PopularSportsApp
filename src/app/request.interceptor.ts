import { HttpInterceptorFn } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  if(cookieService.check('accessToken'))
  {
    const cloned = req.clone({
    setHeaders : {
      authorization : 'Bearer '+cookieService.get('accessToken')
    }
    })
    return next(cloned);
  }
  return next(req);
};
