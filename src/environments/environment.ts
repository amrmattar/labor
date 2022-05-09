// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrlAttachments: 'https://api.ndp.dev.kashnow.noqoodtest.com/api/files/',
  API: {
    OtherServiceAdvanceSalaryRequests: 'api/otherServiceAdvanceSalaryRequests',
    Files: 'api/files',
    Banks: 'api/banks',
    ETransfer: 'api/eTransferSalaryRequests',
    Customers: 'api/customers',
    Installments: 'api/installments',
    CustomersActivationInfo: 'api/customers/customerinfo',
    CustomersActication: 'api/customer/activation/',
    CustomerComments: 'api/customerComments',
    CustomerAttachments: 'api/customerAttachments',
    Accounts: 'api/accounts',
    UserManagement: 'api/users',
    corporatesAccounts: 'api/corporateAccounts',
    AdvanceSalaryRequests: 'api/advanceSalaryRequests',
  },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
