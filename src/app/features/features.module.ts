import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './main-layout/components/top-bar/top-bar.component';
import { SideMenuComponent } from './main-layout/components/side-menu/side-menu.component';
import { ToasterService } from '../core/primeng-implementer/components/toaster/services/toaster.service';
import { UnAuthoratizeComponent } from './un-authoratize/un-authoratize.component';
import { ConfirmationService } from 'primeng/api';
import { AppDialogService } from "../core/primeng-implementer/services/dialog/app-dialog.service";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { WarningComponent } from '../shared/components/warnning-msg';
import { DefaultPageComponent } from './default-page/default-page.component';
import { FinanceComponent } from './finance/finance.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    TopBarComponent,
    SideMenuComponent,
    UnAuthoratizeComponent,
    WarningComponent,
    DefaultPageComponent,
    FinanceComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  providers: [
    ToasterService,
    ConfirmationService
  ]
})
export class FeaturesModule {
}
