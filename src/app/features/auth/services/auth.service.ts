import {Injectable} from '@angular/core';
import {HttpService, StorageService} from "../../../core/services";
import {OauthService} from "../../../core/services/oauth/oauth.service";
import {environment} from "../../../../environments/environment";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  listAllPermission = [
    'Customers.Installments.View',
    'GeneralSettings.LineOfBusiness.View',
    'SalaryInAdvanceRequests.WorkflowTaskRejectedRequests.Edit',
    'GeneralSettings.Banks.List',
    'Corporates.ManageHrUsers.Add',
    'Corporates.Mailing.List',
    'Corporates.Branches.Edit',
    'SalaryInAdvanceRequests.WorkflowTaskRequestsReview.View',
    'GeneralSettings.Transactions.View',
    'GeneralSettings.LineOfBusiness.Add',
    'Corporates.Corporate.Edit',
    'Customers.Transactions.View',
    'SalaryInAdvanceRequests.WorkflowTaskTransferredRequests.Edit',
    'Corporates.Branches.List',
    'SalaryInAdvanceRequests.WorkflowTaskCustomerCanceledRequests.Edit',
    'GeneralSettings.Districts.Add',
    'GeneralSettings.Banks.Add',
    'Customers.Transactions.Edit',
    'GeneralSettings.Transactions.Add',
    'Customers.Account.Edit',
    'Corporates.Corporate.View',
    'SalaryInAdvanceRequests.WorkflowTaskRequestProcessingMaker.Edit',
    'Customers.Account.View',
    'Corporates.Mailing.Add',
    'GeneralSettings.Transactions.Edit',
    'SalaryInAdvanceRequests.WorkflowTaskRequestProcessingChecker.Edit',
    'Customers.ReceivingMethods.View',
    'SalaryInAdvanceRequests.WorkflowTaskCustomerCanceledRequests.View',
    'GeneralSettings.Banks.Edit',
    'SalaryInAdvanceRequests.SalaryInAdvanceRequests.View',
    'Customers.Remarks.View',
    'SalaryInAdvanceRequests.WorkflowTaskTransferredRequests.View',
    'SalaryInAdvanceRequests.WorkflowTaskRequestProcessingChecker.View',
    'GeneralSettings.Cities.List',
    'GeneralSettings.Districts.View',
    'Customers.Statements.View',
    'SalaryInAdvanceRequests.WorkflowTaskRequestsReview.Edit',
    'SalaryInAdvanceRequests.WorkflowTaskRequestProcessingMaker.View',
    'Customers.Archive.Edit',
    'Corporates.ManageHrUsers.List',
    'Corporates.Corporate.List',
    'GeneralSettings.Cities.Add',
    'Corporates.Branches.Add',
    'Corporates.Branches.View',
    'Corporates.Mailing.Delete',
    'GeneralSettings.Cities.View',
    'GeneralSettings.Banks.View',
    'Customers.ResetPin.Edit',
    'Corporates.Mailing.View',
    'GeneralSettings.Transactions.List',
    'GeneralSettings.LineOfBusiness.List',
    'Customers.Logs.View',
    'GeneralSettings.Districts.Edit',
    'SalaryInAdvanceRequests.WorkflowTaskPendingTransferFeedback.Edit',
    'Corporates.ManageHrUsers.ResetPin',
    'Corporates.ManageHrUsers.Edit',
    'Corporates.ResetPin.Edit',
    'GeneralSettings.Districts.List',
    'Customers.Archive.View',
    'Customers.Customers.List',
    'SalaryInAdvanceRequests.WorkflowTaskRejectedRequests.View',
    'Customers.Customers.View',
    'Corporates.ManageHrUsers.View',
    'Corporates.Corporate.Add',
    'GeneralSettings.LineOfBusiness.Edit',
    'SalaryInAdvanceRequests.WorkflowTaskPendingTransferFeedback.View',
    'GeneralSettings.Cities.Edit'
  ]

  constructor(
    private http: HttpService,
    private store: StorageService,
    private oauthService: OauthService
  ) {
  }

  login(userCredential): Promise<any> {
    return this.oauthService.fetchToken(userCredential);
  }

  getUserPermission() {
    return this.http.get('api/corporatePermissions').pipe(take(1));
  }
}
