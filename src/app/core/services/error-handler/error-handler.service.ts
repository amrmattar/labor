import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OauthService } from '../oauth/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {


  constructor(
    private oatuhService: OauthService
  ) {
  }

  handleError(error: HttpErrorResponse, request: HttpRequest<unknown>): string {

    let errorMessage: any = 'Unknown error!';

    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred.
        errorMessage = `Error: ${error.error.message}`;
      } else { // server-side error
        switch (error.status) {
          case 403:
            errorMessage = 'Forbidden';
            break;
          case 404:
            errorMessage = 'Not Found';
            break;
          case 408:
            errorMessage = 'Request Timeout';
            break;
          case 500:
            errorMessage = 'Internal Server Error';
            break;
          case 502:
            errorMessage = 'Bad Gateway';
            break;
          case 503:
            errorMessage = 'Service Unavailable';
            break;
          case 504:
            errorMessage = 'Gateway Timeout';
            break;
          default:
            errorMessage = error.error;
            break;
        }
      }
    }

    // call a toast service and display the errorMessage
    return errorMessage;

  }
}
