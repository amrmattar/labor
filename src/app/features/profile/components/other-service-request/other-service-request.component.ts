import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldType, ICols } from 'src/app/core/primeng-implementer/components/data-table';
import { XhrRequestType } from 'src/app/core/primeng-implementer/components/data-table/enums/xhr-request-type';
import { ITableConfig } from 'src/app/core/primeng-implementer/components/data-table/interfaces/table-config.interface';
import { SortingType } from 'src/app/shared/enums/sorting-type.enum';
import { ITopBar, TopBarHandlerService } from 'src/app/shared/services/top-bar-handler.service';
import { environment } from 'src/environments/environment';
import { AppDialogService } from 'src/app/core/primeng-implementer/services/dialog/app-dialog.service';
import { OtherServiceRequestViewComponent } from './other-service-request-view/other-service-request-view.component';
import { OtherServiceRequestCreateComponent } from './other-service-request-create/other-service-request-create.component';
import { ProfileService } from '../../services/profile.service';
import { SeverityToaster } from 'src/app/core/primeng-implementer/components/toaster/enums/severity-toaster.enum';
import { ToastContent } from 'src/app/core/primeng-implementer/components/toaster/interfaces/toast-content.interface';
import { ToasterService } from 'src/app/core/primeng-implementer/components/toaster/services/toaster.service';
import { LocalizationService } from 'src/app/core/services';

@Component({
  selector: 'app-other-service-request',
  template: `
    <div class="row fix-row table-meta-data">
      <h1>
          {{'otherService.RequestHistory' | translate}}
        </h1>
      <div class="col-3 meta-data-head-green">{{'Home_Info.AvailableBalance' | translate}}</div>
      <div class="col-3 meta-data-tail">{{availableBalance | number}} {{'General.EGP' |
            translate}}</div>
    </div>
    <ui-data-table
      [cols]="cols"
      [reloadList]="reloadList"
      [tableConfig]="tableConfig"
      (listingReloaded)="listReloaded($event)"
    ></ui-data-table>
  `,
})
export class OtherServiceRequestComponent implements OnInit {
  cols: ICols[] = [
    {
      field: 'creationDate',
      header: 'otherService.CreationDate',
      fieldType: FieldType.date,
    },
    {
      field: 'name',
      header: 'otherService.RequiredServiceName',
      fieldType: FieldType.string,
    },
    {
      field: 'requestedAmount',
      header: 'otherService.Amount',
      fieldType: FieldType.string,
    },
    {
      field: 'installmentPlan',
      header: 'otherService.Plan',
      fieldType: FieldType.string,
    },
    {
      field: 'installmentAmount',
      header: 'otherService.Installment',
      fieldType: FieldType.string,
    },
    {
      field: 'statusName',
      header: 'otherService.Status',
      fieldTranslate: true,
      fieldType: FieldType.CancelableStatus,
      fieldWithCancelBtn: ['Request Under Review', 'الطلب تحت المراجعة'],
      command: (data) => {
        this.cancelRequest(data.id)
      }
    },
  ];
  tableConfig: ITableConfig = {
    showSearch: true,
    actionColNamed: 'otherService.FullDetails',
    fetchingData: {
      requestType: XhrRequestType.get,
      url: environment.API.OtherServiceAdvanceSalaryRequests,
      params: {
        PageNumber: 1,
        PageSize: 10,
        sortFieldName: 'creationDate',
        sortFieldDirection: SortingType.Descending,
      },
    },
    actionsConfig: {
      tableActions: [
        {
          name: 'otherServiceView.CreatenewServiceRequest',
          command: () => {
            this.openCreatePopup();
          },
        },
      ],
      colsActions: [
        {
          label: 'General.ViewDetails',
          command: (data) => {
            this.openViewPopup(data);
          }
        }
      ],
    },
    empty: {
      message: this.translationServices.translateIT('General.NO_Available_Data_Yet'),
      addTitle: this.translationServices.translateIT('otherServiceView.CreatenewServiceRequest'),
      addActions: () => {
        this.openCreatePopup();
      },
    },
  };
  reloadList: boolean = false;
  availableBalance: any;

  constructor(
    private activatedrouter: ActivatedRoute,
    private topbarService: TopBarHandlerService,
    private dialogService: AppDialogService,
    private profileService: ProfileService,
    private toasterService: ToasterService,
    public translationServices: LocalizationService
  ) {
  }

  ngOnInit(): void {
    this.activatedrouter.data.subscribe((res: ITopBar) => {
      this.topbarService.routeDate.next(res);
    });

    this.availableRequest()
    // this.checkOnChangeLang();
    // this.loadCol()
  }

  checkOnChangeLang() {
    this.translationServices.checkOnChangeLang().subscribe(
      _ => {
        this.loadCol()
      }
    )
  }

  loadCol() {
    this.cols = [
      {
        field: 'creationDate',
        header: 'otherService.CreationDate',
        fieldType: FieldType.date,
      },
      {
        field: 'name',
        header: 'otherService.RequiredServiceName',
        fieldType: FieldType.string,
      },
      {
        field: 'requestedAmount',
        header: 'otherService.Amount',
        fieldType: FieldType.string,
      },
      {
        field: 'installmentPlan',
        header: 'otherService.Plan',
        fieldType: FieldType.string,
      },
      {
        field: 'installmentAmount',
        header: 'otherService.Installment',
        fieldType: FieldType.string,
      },
      {
        field: this.translationServices.getStringWithCurrentLang('statusName'),
        header: 'otherService.Status',
        fieldType: FieldType.CancelableStatus,
        fieldWithCancelBtn: ['Requests Review', 'الطلب تحت المراجعة'],
        command: (data) => {
          this.cancelRequest(data.id)
        }
      },
    ];
  }
  openViewPopup(item) {
    const POPUP = this.dialogService.openDialog(OtherServiceRequestViewComponent, {
      width: '70%',
      header: this.translationServices.translateIT('otherServiceView.ViewServiceRequest'),
      data: {
        ID: item.id
      },
    });

    POPUP.onClose.subscribe((res) => {
    });
  }

  openCreatePopup() {
    const POPUP = this.dialogService.openDialog(OtherServiceRequestCreateComponent, {
      width: '50%',
      header: this.translationServices.translateIT('otherServiceView.CreatenewServiceRequest'),
    });

    POPUP.onClose.subscribe((res) => {
      if (res) {
        this.reloadList = true;
        this.availableRequest()
      }
    });
  }

  availableRequest() {
    this.profileService.corporateInfo().subscribe((res) => {
      this.tableConfig.actionsConfig.tableActions[0].disableFlag = res.corporateMinRequestAmount > res.availableBalance
    })

    this.profileService.corporateInfo().subscribe(
      res => {
        this.availableBalance = res.availableBalance
      },
      error => {
      }
    );
  }

  toasterContent: ToastContent = {
    severity: SeverityToaster.success,
    summary: 'Success',
    detail: "It's work fine",
  };

  cancelRequest(id) {
    this.profileService.requestCancellation({ requestId: id }).subscribe((res) => {
      this.reloadList = true;
      this.toasterService.showToast(this.toasterContent);
    })
  }

  listReloaded(event) {
    this.reloadList = event;
  }

}
