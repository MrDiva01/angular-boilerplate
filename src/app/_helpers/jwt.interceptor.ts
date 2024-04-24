import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AccountService } from '@app/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
<<<<<<< HEAD
    constructor(private accountService: AccountService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        const account = this.accountService.accountValue;
        const isLoggedIn = account && account.jwtToken;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${account.jwtToken}` }
            });
        }

        return next.handle(request);
    }
=======
   constructor(private accountService: AccountService) { }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // add auth header with jwt if account is logged in and request is to the api url
       const account = this.accountService.accountValue;
       const isLoggedIn = account && account.jwtToken;
       const isApiUrl = request.url.startsWith(environment.apiUrl);
       if (isLoggedIn && isApiUrl) {
           request = request.clone({
               setHeaders: { Authorization: `Bearer ${account.jwtToken}` }
           });
       }

       return next.handle(request);
   }
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
}