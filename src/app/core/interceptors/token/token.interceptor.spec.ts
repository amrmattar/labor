import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }
      ]
    });
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const interceptor: TokenInterceptor = new TokenInterceptor;
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header to request', inject([HttpClient], (http: HttpClient) => {
    http.get('/dummy').subscribe();
    const httpRequest: TestRequest = httpMock.expectOne('/dummy');
    expect(httpRequest.request.headers.has("Authorization")).toBeTruthy();
  }));

  it('should has Authorization header to request with value "test token"', inject([HttpClient], (http: HttpClient) => {
    http.get('/anything').subscribe();
    const httpRequest: TestRequest = httpMock.expectOne('/anything');
    expect(httpRequest.request.headers.get("Authorization")).toEqual('test token');
  }));


});
