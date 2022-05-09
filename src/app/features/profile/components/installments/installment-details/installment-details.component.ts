import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import {
  FieldType,
  ICols,
} from 'src/app/core/primeng-implementer/components/data-table';
import { XhrRequestType } from 'src/app/core/primeng-implementer/components/data-table/enums/xhr-request-type';
import { ITableConfig } from 'src/app/core/primeng-implementer/components/data-table/interfaces/table-config.interface';
import { SortingType } from 'src/app/shared/enums/sorting-type.enum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-installment-details',
  template: `
    <ui-data-table
      [cols]="cols"
      [reloadList]="reloadList"
      [tableConfig]="tableConfig"
      (listingReloaded)="listReloaded($event)"
      ></ui-data-table>
    `,
})
export class InstallmentDetailsComponent implements OnInit {

  cols: ICols[] = [
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
    {
      field: 'requestRequestedAmount',
      header: 'Installment.OriginalAmount',
      fieldType: FieldType.string,
    },
    {
      field: 'installmentPlan',
      header: 'Installment.Plan',
      fieldType: FieldType.string,
    },
    {
      field: 'number',
      header: 'Installment.InstallmentNumber',
      fieldType: FieldType.string,
    },
  ];
  tableConfig: ITableConfig = {
    showSearch: true,
    showPagenation: true,
    fetchingData: {
      requestType: XhrRequestType.get,
      url: this.config.data.URl,
      params: {
        PageNumber: 1,
        PageSize: 10,
        sortFieldName: 'creationDate',
        sortFieldDirection: SortingType.Descending,
      },
    },
  };
  reloadList: boolean = false;
  constructor(public config: DynamicDialogConfig) { }

  ngOnInit(): void { }

  listReloaded(event) {
    this.reloadList = event;
  }


}
