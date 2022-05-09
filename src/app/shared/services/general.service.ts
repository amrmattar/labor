import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http:HttpService) { }

  getCompanies():Observable<any>{
    return of([
      { label: 'Select Company', value: null },
      { label: 'Kash Now', value: '70d028d5-f4a6-47da-b9d5-e12a05ee1935' },
    ]).pipe(take(1))
  }
}
