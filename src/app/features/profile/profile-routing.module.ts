import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BillTaxesComponent } from './components/bill-taxes/bill-taxes.component';
import { ECardComponent } from './components/e-card/e-card.component';
import { ETransferComponent } from './components/e-transfer/e-transfer.component';
import { HomeComponent } from './components/home/home.component';
import { InstallmentsComponent } from './components/installments/installments.component';
import { ManageDriversComponent } from './components/manage-drivers/manage-drivers.component';
import { OtherServiceRequestComponent } from './components/other-service-request/other-service-request.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { StatementsComponent } from './components/statements/statements.component';
import { TransferToDriversComponent } from './components/transfer-to-drivers/transfer-to-drivers.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileDetailsComponent,
    data: {
      pageTitle: 'Side_Menu.Profile',
      breadcrumb: [
        { label: 'Side_Menu.Profile' },
        { label: 'Side_Menu.Profile' },
        { label: 'Side_Menu.Profile' },
      ],
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'bill&taxes',
        component: BillTaxesComponent,
      },
      {
        path: 'e-card',
        component: ECardComponent,
      },
      {
        path: 'e-transfer',
        component: ETransferComponent,
      },
      {
        path: 'other-service-request',
        component: OtherServiceRequestComponent,
      },
      {
        path: 'manage-drivers',
        component: ManageDriversComponent,
      },
      {
        path: 'transfer-to-drivers',
        component: TransferToDriversComponent,
      },
      {
        path: 'installments',
        component: InstallmentsComponent,
      },
      {
        path: 'statements',
        component: StatementsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {
  constructor(private translate: TranslateService) {}
}
