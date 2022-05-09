import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { AppDialogService } from 'src/app/core/primeng-implementer/services/dialog/app-dialog.service';
import { HomeComponent } from './components/home/home.component';
import { BillTaxesComponent } from './components/bill-taxes/bill-taxes.component';
import { ECardComponent } from './components/e-card/e-card.component';
import { ETransferComponent } from './components/e-transfer/e-transfer.component';
import { OtherServiceRequestComponent } from './components/other-service-request/other-service-request.component';
import { ManageDriversComponent } from './components/manage-drivers/manage-drivers.component';
import { TransferToDriversComponent } from './components/transfer-to-drivers/transfer-to-drivers.component';
import { InstallmentsComponent } from './components/installments/installments.component';
import { StatementsComponent } from './components/statements/statements.component';
import { FormsModule } from '@angular/forms';
import { ETransferFormComponent } from './components/e-transfer/e-transfer-form/e-transfer-form.component';
import { ETransferViewComponent } from './components/e-transfer/e-transfer-view/e-transfer-view.component';
import { InstallmentDetailsComponent } from './components/installments/installment-details/installment-details.component';
import { StatementDetailsComponent } from './components/statements/statement-details/statement-details.component';
import { OtherServiceRequestCreateComponent } from './components/other-service-request/other-service-request-create/other-service-request-create.component';
import { OtherServiceRequestViewComponent } from './components/other-service-request/other-service-request-view/other-service-request-view.component';


@NgModule({
  declarations: [
    ProfileDetailsComponent,
    HomeComponent,
    BillTaxesComponent,
    ECardComponent,
    ETransferComponent,
    OtherServiceRequestComponent,
    ManageDriversComponent,
    TransferToDriversComponent,
    InstallmentsComponent,
    StatementsComponent,
    ETransferFormComponent,
    ETransferViewComponent,
    InstallmentDetailsComponent,
    StatementDetailsComponent,
    OtherServiceRequestCreateComponent,
    OtherServiceRequestViewComponent
  ],
  imports: [
    ProfileRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    AppDialogService, DatePipe
  ]
})
export class ProfileModule { }
