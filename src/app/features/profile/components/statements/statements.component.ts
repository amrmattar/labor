import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FieldType,
  ICols,
} from 'src/app/core/primeng-implementer/components/data-table';
import { XhrRequestType } from 'src/app/core/primeng-implementer/components/data-table/enums/xhr-request-type';
import { ITableConfig } from 'src/app/core/primeng-implementer/components/data-table/interfaces/table-config.interface';
import { AppDialogService } from 'src/app/core/primeng-implementer/services/dialog/app-dialog.service';
import { LocalizationService } from 'src/app/core/services';
import { environment } from 'src/environments/environment';
import { StatementDetailsComponent } from './statement-details/statement-details.component';

@Component({
  selector: 'app-statements',
  template: `
    <ui-data-table
      [cols]="cols"
      [reloadList]="reloadList"
      [tableConfig]="tableConfig"
      (listingReloaded)="listReloaded($event)"
    ></ui-data-table>
  `,
})
export class StatementsComponent implements OnInit {
  cols: ICols[] = [
    {
      field: '',
      header: 'General.no',
      fieldType: FieldType.counter,
    },
    {
      field: 'creationDate',
      header: 'Statements.Date',
      fieldType: FieldType.date,
    },
    {
      field: 'amount',
      header: 'Statements.Amount',
      fieldType: FieldType.string,
    },
  ];

  tableConfig: ITableConfig;
  reloadList: boolean = false;

  constructor(
    private dialogService: AppDialogService,
    public translationServices: LocalizationService
  ) { }

  ngOnInit(): void {
    this.tableConfig = {
      showSearch: true,
      actionColNamed: 'General.Details',
      fetchingData: {
        requestType: XhrRequestType.get,
        url: environment.API.Accounts + '/statements',
      },
      actionsConfig: {
        colsActions: [
          {
            label: 'General.ViewDetails',
            command: (data) => {
              this.openPopup(data.id);
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
  }

  listReloaded(event) {
    this.reloadList = event;
  }

  openPopup(id) {
    const Popup = this.dialogService.openDialog(StatementDetailsComponent, {
      width: '80%',
      header: this.translationServices.translateIT(
        'Statements.StatementDetails'
      ),
      data: {
        id,
      },
    });
  }
}
