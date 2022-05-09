import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LocalizationService } from 'src/app/core/services';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-e-transfer-view',
  templateUrl: './e-transfer-view.component.html',
  styleUrls: ['./e-transfer-view.component.scss']
})
export class ETransferViewComponent implements OnInit {

  requestDetails: any;
  requestID: any;
  processingDetails: any;
  bankName: any;

  constructor(public config: DynamicDialogConfig, public profileService: ProfileService, public ref: DynamicDialogRef, public translationServices: LocalizationService,) { }

  ngOnInit(): void {
    this.requestID = this.config.data.ID;
    this.viewRequest();
  }

  viewRequest(): void {
    this.profileService.ETransferDetail(this.requestID).subscribe(
      res => {
        this.requestDetails = res;
        this.bankName = res[this.translationServices.getStringWithCurrentLang('bankName')];
        this.profileService.proccessedData(res.requestedAmount, res.installmentPlan).subscribe(
          res => {
            this.processingDetails = res
          }
        )
      })
  }

  cancelForm() {
    this.ref.close();
  }
}
