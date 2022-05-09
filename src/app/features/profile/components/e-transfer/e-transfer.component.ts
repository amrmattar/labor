import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FieldType,
  ICols,
} from 'src/app/core/primeng-implementer/components/data-table';
import { XhrRequestType } from 'src/app/core/primeng-implementer/components/data-table/enums/xhr-request-type';
import { ITableConfig } from 'src/app/core/primeng-implementer/components/data-table/interfaces/table-config.interface';
import { SortingType } from 'src/app/shared/enums/sorting-type.enum';
import {
  ITopBar,
  TopBarHandlerService,
} from 'src/app/shared/services/top-bar-handler.service';
import { environment } from 'src/environments/environment';
import { AppDialogService } from 'src/app/core/primeng-implementer/services/dialog/app-dialog.service';
import { ProfileService } from '../../services/profile.service';
import { SeverityToaster } from 'src/app/core/primeng-implementer/components/toaster/enums/severity-toaster.enum';
import { ToastContent } from 'src/app/core/primeng-implementer/components/toaster/interfaces/toast-content.interface';
import { ToasterService } from 'src/app/core/primeng-implementer/components/toaster/services/toaster.service';
import { ETransferViewComponent } from './e-transfer-view/e-transfer-view.component';
import { ETransferFormComponent } from './e-transfer-form/e-transfer-form.component';
import { LocalizationService } from 'src/app/core/services';

@Component({
  selector: 'app-e-transfer',
  template: `
    <ui-data-table
      [cols]="cols"
      [reloadList]="reloadList"
      [tableConfig]="tableConfig"
      (listingReloaded)="listReloaded($event)"
    ></ui-data-table>
  `,
})
export class ETransferComponent implements OnInit {
  cols: ICols[] = [
    {
      field: 'creationDate',
      header: 'otherService.CreationDate',
      fieldType: FieldType.date,
    },
    {
      field: 'fullName',
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
      fieldWithCancelBtn: ['Request Under Review', 'الطلب تحت المراجعة'],
      command: (data) => {
        this.cancelRequest(data.id);
      },
    },
  ];
  tableConfig: ITableConfig = {
    showSearch: true,
    fetchingData: {
      requestType: XhrRequestType.get,
      url: environment.API.ETransfer,
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
          name: 'otherServiceView.CreateTranser',
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
          },
        },
      ],
    },
    empty: {
      message: this.translationServices.translateIT(
        'General.NO_Available_Data_Yet'
      ),
      addTitle: this.translationServices.translateIT(
        'otherServiceView.CreateTranser'
      ),
      addActions: () => {
        this.openCreatePopup();
      },
    },
  };
  reloadList: boolean = false;

  constructor(
    private activatedrouter: ActivatedRoute,
    private topbarService: TopBarHandlerService,
    private dialogService: AppDialogService,
    private profileService: ProfileService,
    private toasterService: ToasterService,
    public translationServices: LocalizationService
  ) {}

  ngOnInit(): void {
    this.activatedrouter.data.subscribe((res: ITopBar) => {
      this.topbarService.routeDate.next(res);
    });

    this.translationServices.checkOnChangeLang().subscribe((_) => {
      console.log('here');

      this.cols = this.cols;
    });

    this.availableRequest();
  }

  openViewPopup(item) {
    const POPUP = this.dialogService.openDialog(ETransferViewComponent, {
      width: '75%',
      header: `${this.translationServices.translateIT(
        'otherServiceView.RequestView'
      )}(${item.fullName})`,
      data: {
        ID: item.id,
      },
    });

    POPUP.onClose.subscribe((res) => {});
  }

  openCreatePopup() {
    const POPUP = this.dialogService.openDialog(ETransferFormComponent, {
      width: '65%',
      header: this.translationServices.translateIT(
        'otherServiceView.CreateTranser'
      ),
    });

    POPUP.onClose.subscribe((res) => {
      if (res) {
        this.reloadList = true;
        this.availableRequest();
      }
    });
  }

  availableRequest() {
    this.profileService.corporateInfo().subscribe((res) => {
      this.tableConfig.actionsConfig.tableActions[0].disableFlag =
        res.corporateMinRequestAmount > res.availableBalance ? true : false;
    });
  }

  toasterContent: ToastContent = {
    severity: SeverityToaster.success,
    summary: 'Success',
    detail: "It's work fine",
  };

  cancelRequest(id) {
    this.profileService
      .requestCancellation({ requestId: id })
      .subscribe((res) => {
        this.reloadList = true;
        this.toasterService.showToast(this.toasterContent);
      });
  }

  listReloaded(event) {
    this.reloadList = event;
  }
}
