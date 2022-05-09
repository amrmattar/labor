import { Injectable } from '@angular/core';
import { map, take, switchMap } from 'rxjs/operators';
import { iif, Observable, of } from 'rxjs';
import { HttpService, LocalizationService } from 'src/app/core/services';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpService, public translationServices: LocalizationService) { }

  corporateInfo(): Observable<any> {
    return this.http.get(environment.API.corporatesAccounts).pipe(take(1));
  }

  addOtherServiceRequest(requestBody): Observable<any> {
    return this.http
      .post(environment.API.OtherServiceAdvanceSalaryRequests, requestBody)
      .pipe(take(1));
  }

  BanksLookup(): Observable<any> {
    return this.http.get(environment.API.Banks + '/lookup').pipe(
      map((items) => {
        return items.map((val) => {
          return { label: val[this.translationServices.getStringWithCurrentLang('name')], value: val.id };
        });
      }),
      take(1)
    );
  }

  addETransferRequest(requestBody): Observable<any> {
    return this.http
      .post(environment.API.ETransfer, requestBody)
      .pipe(take(1));
  }

  addRequestAttachment(id, requestBody): Observable<any> {
    return this.http
      .put(environment.API.AdvanceSalaryRequests + `/${id}/attachements`, requestBody)
  }

  serviceRequestDetail(Id): Observable<any> {
    return this.http
      .get(environment.API.OtherServiceAdvanceSalaryRequests + '/' + Id)
      .pipe(take(1));
  }

  ETransferDetail(Id): Observable<any> {
    return this.http
      .get(environment.API.ETransfer + '/' + Id)
      .pipe(take(1));
  }

  statementDetail(Id): Observable<any> {
    return this.http
      .get(environment.API.Accounts + '/statement/' + Id)
      .pipe(take(1));
  }

  addOtherServiceRequestAttachment(id, attachements): Observable<any> {
    const formData = new FormData();
    attachements.forEach((file) => {
      formData.append('files', file);
    });

    return this.http
      .put(
        environment.API.AdvanceSalaryRequests + `/${id}/attachements`,
        formData
      )
      .pipe(take(1));
  }

  proccessedData(amount, plan): Observable<any> {
    const HEADER = {
      params: { RequestAmount: amount, InstallmentPlan: plan },
    };
    return this.http
      .get(environment.API.AdvanceSalaryRequests, HEADER)
      .pipe(take(1));
  }

  requestCancellation(id): Observable<any> {
    return this.http
      .put(environment.API.AdvanceSalaryRequests, id)
      .pipe(take(1));
  }

  saveotherService(requestBody, attachements) {
    return this.http
      .post(environment.API.OtherServiceAdvanceSalaryRequests, requestBody)
      .pipe(
        switchMap((response) =>
          iif(
            () => attachements.length,
            this.addOtherServiceRequestAttachment(response, attachements),
            of(response)
          )
        ),
        take(1)
      );
  }
}
