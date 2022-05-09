import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let errorHandlerService: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorHandlerService]
    });
    errorHandlerService = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(errorHandlerService).toBeTruthy();
  });

  describe('handleError function', () => {

    it("should return a 'Bad Request' errorMessage", () => {
      const errorMessage = 'Bad Request';
      const error = new HttpErrorResponse({ status: 400 });
      let response: string = errorHandlerService.handleError(error);
      expect(response).toEqual(errorMessage);
    });

    it('should return "Unauthorized" errorMessage', () => {
      const errorMessage = 'Unauthorized';
      const error = new HttpErrorResponse({ status: 401 });
      let response: string = errorHandlerService.handleError(error);
      expect(response).toEqual(errorMessage);
    });

    it("should return a 'Forbidden' errorMessage", () => {
      const errorMessage = 'Forbidden';
      const error = new HttpErrorResponse({ status: 403 });
      let response: string = errorHandlerService.handleError(error);
      expect(response).toEqual(errorMessage);
    });

    it("should return a 'Not Found' errorMessage", () => {
      const errorMessage = 'Not Found';
      const error = new HttpErrorResponse({ status: 404 });
      let response: string = errorHandlerService.handleError(error);
      expect(response).toEqual(errorMessage);
    });

    it("should return a 'Request Timeout' errorMessage", () => {
      const errorMessage = 'Request Timeout';
      const error = new HttpErrorResponse({ status: 408 });
      let response: string = errorHandlerService.handleError(error);
      expect(response).toEqual(errorMessage);
    });

    it("should return an 'Internal Server Error' errorMessage", () => {
      const errorMessage = 'Internal Server Error';
      const error = new HttpErrorResponse({ status: 500 });
      let response: string = errorHandlerService.handleError(error);
      expect(response).toEqual(errorMessage);
    });

    it("should return a 'Bad Gateway' errorMessage", () => {
      const errorMessage = 'Bad Gateway';
      const error = new HttpErrorResponse({ status: 502 });
      let response: string = errorHandlerService.handleError(error);
      expect(response).toEqual(errorMessage);
    });

    it("should return a 'Service Unavailable' errorMessage", () => {
      const errorMessage = 'Service Unavailable';
      const error = new HttpErrorResponse({ status: 503 });
      let response: string = errorHandlerService.handleError(error);
      expect(response).toEqual(errorMessage);
    });

    it("should return a 'Gateway Timeout' errorMessage", () => {
      const errorMessage = 'Gateway Timeout';
      const error = new HttpErrorResponse({ status: 504 });
      let response: string = errorHandlerService.handleError(error);
      expect(response).toEqual(errorMessage);
    });

    it("should return an 'Unknown error!' errorMessage", () => {
      const errorMessage = 'Unknown error!';
      const error = new Error;
      let response: string = errorHandlerService.handleError(error);
      expect(response).toEqual(errorMessage);
    });

  });


});
