import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-other-service-request-view',
  templateUrl: './other-service-request-view.component.html',
  styleUrls: ['./other-service-request-view.component.scss']
})
export class OtherServiceRequestViewComponent implements OnInit {
  requestDetails: any;
  requestID: any;
  processingDetails: any;

  constructor(public config: DynamicDialogConfig, public profileService: ProfileService, public ref: DynamicDialogRef,) { }

  ngOnInit(): void {
    this.requestID = this.config.data.ID;
    this.viewRequest();
  }

  viewRequest(): void {
    this.profileService.serviceRequestDetail(this.requestID).subscribe(
      res => {
        this.requestDetails = res;
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
