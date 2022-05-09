import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ErrorHandlerService, StorageService } from "../../services";
import { catchError } from 'rxjs/operators';
import { OauthService } from '../../services/oauth/oauth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  token: string;

  constructor(
    private storageService: StorageService,
    private oauthService: OauthService,
    private router: Router,
    private errorHandlerService: ErrorHandlerService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    request = this.addTokenToHeader(request);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === 401) {

          // this.oauthService.refreshToken()
          //   .then(() => {
          //     request = this.addTokenToHeader(request);
          //     return next.handle(request);
          //   })
          //   .catch(() => {
          //     this.router.navigate(['Unauthorized'])
          //   });
        } else {
          const ERROR = this.errorHandlerService.handleError(error, request);
          return throwError(ERROR);
        }

      })
    );
  }

  addTokenToHeader(request: HttpRequest<any>) {

    const TOKEN = this.storageService.getToken();

    if (TOKEN)
      return request.clone({
        setHeaders: { 'Authorization': `Bearer ${TOKEN}` }
      });
    else
      return request;

  }
}
