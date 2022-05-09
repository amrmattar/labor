import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FieldType,
  ICols,
} from 'src/app/core/primeng-implementer/components/data-table';
import { XhrRequestType } from 'src/app/core/primeng-implementer/components/data-table/enums/xhr-request-type';
import { ITableConfig } from 'src/app/core/primeng-implementer/components/data-table/interfaces/table-config.interface';
import { AppDialogService } from 'src/app/core/primeng-implementer/services/dialog/app-dialog.service';
import { LocalizationService } from 'src/app/core/services';
import { SortingType } from 'src/app/shared/enums/sorting-type.enum';
import { environment } from 'src/environments/environment';
import { StatementDetailsComponent } from '../statements/statement-details/statement-details.component';
import { InstallmentDetailsComponent } from './installment-details/installment-details.component';

@Component({
  selector: 'app-installments',
  template: `
    <h1>
      {{ 'Installment.TotalInstallments' | translate }}
    </h1>
    <div class="ps-3">{{ totalInstallment | number: '' }} EGP</div>
    <ui-data-table
      [cols]="cols"
      [reloadList]="reloadList"
      [tableConfig]="tableConfig"
      (listingReloaded)="listReloaded($event)"
      (fullResponse)="listResponse($event)"
    ></ui-data-table>
  `,
})
export class InstallmentsComponent implements OnInit {
  cols: ICols[] = [
    {
      field: '',
      header: 'General.no',
      fieldType: FieldType.counter,
    },
    {
      field: 'date',
      header: 'Installment.Date',
      fieldType: FieldType.date,
    },
    {
      field: 'amount',
      header: 'Installment.Amount',
      fieldType: FieldType.string,
    },
  ];
  tableConfig: ITableConfig = {
    showSearch: true,
    actionColNamed: 'General.Details',
    fetchingData: {
      requestType: XhrRequestType.get,
      url: environment.API.Installments,
      responseIsObject: true,
      propertyContainList: 'installments',
      returnFullResponse: true,
      params: {
        PageNumber: 1,
        PageSize: 10,
        sortFieldName: 'date',
        sortFieldDirection: SortingType.Ascending,
      },
    },
    actionsConfig: {
      colsActions: [
        {
          label: this.actionColLabel,
          command: (data) => {
            this.openPopup(
              data.date.split('-')[0],
              data.date.split('-')[1],
              data.isCurrent,
              data.statementId
            );
          },
        },
      ],
    },
    empty: {
      message: this.translationServices.translateIT(
        'General.NO_Available_Data_Yet'
      ),
      addActions: () => { },
    },
  };

  constructor(
    private dialogService: AppDialogService,
    public translationServices: LocalizationService
  ) { }

  actionColLabel(rowData) {
    return rowData.isCurrent
      ? 'General.currentStatement'
      : 'General.ViewDetails';
  }

  reloadList: boolean = false;
  totalInstallment: number;

  ngOnInit(): void { }

  listReloaded(event) {
    this.reloadList = event;
  }

  listResponse(data) {
    this.totalInstallment = data.totalAmount;
  }
  openPopup(year, month, isCurrent, id) {
    const URl = environment.API.Installments + `/${year}/${month}`;
    if (isCurrent) {
      const Popup = this.dialogService.openDialog(StatementDetailsComponent, {
        width: '80%',
        header: this.translationServices.translateIT(
          'Statements.StatementDetails'
        ),
        data: {
          id,
        },
      });
    } else {
      const Popup = this.dialogService.openDialog(InstallmentDetailsComponent, {
        width: '80%',
        header: this.translationServices.translateIT(
          'Installment.InstallmentDetails'
        ),
        data: {
          URl: URl,
        },
      });
    }
  }
}
