import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services';
import { IParamsListing } from 'src/app/shared/interfaces/params-listing.interface';
import { HelpersService } from 'src/app/shared/services/helpers.service';
import { ICols } from '..';
import { XhrRequestType } from '../enums/xhr-request-type';
import { IFetchTableData } from '../interfaces/fetch-table-data';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  tableCols: Subject<ICols[]> = new Subject();

  constructor(
    private http: HttpService,
    private helperService: HelpersService
  ) {
  }

  setTableCols(cols: ICols[]) {
    this.tableCols.next(cols);
  }

  fetchData(fetchConfig: IFetchTableData): Observable<any> {

    if (fetchConfig.requestType === XhrRequestType.post)
      return this.http.post(fetchConfig.url, fetchConfig.params).pipe(take(1));

    let params = fetchConfig.params ? this.helperService.setParamsForListing(fetchConfig.params) : null;
    return this.http.get(fetchConfig.url, { params }).pipe(
      map(response => {
        if (fetchConfig.responseIsObject)
          return { ...response, items: response[fetchConfig.propertyContainList] };

        return response;
      }),
      take(1)
    );
  }

  export(url: string, filterParams: IParamsListing) {
    const params = this.helperService.setParamsForListing(filterParams);
    const options = {
      responseType: 'blob',
      params: params
    };

    return this.http.post(url, null, options).pipe(take(1));
  }
}
