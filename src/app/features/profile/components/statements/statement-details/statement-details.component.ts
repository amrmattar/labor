import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import {
  FieldType,
  ICols,
} from 'src/app/core/primeng-implementer/components/data-table';
import { XhrRequestType } from 'src/app/core/primeng-implementer/components/data-table/enums/xhr-request-type';
import { ITableConfig } from 'src/app/core/primeng-implementer/components/data-table/interfaces/table-config.interface';
import { LocalizationService } from 'src/app/core/services';
import { SortingType } from 'src/app/shared/enums/sorting-type.enum';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-statement-details',
  templateUrl: './statement-details.component.html',
  styleUrls: ['./statement-details.component.scss']
})
export class StatementDetailsComponent implements OnInit {
  statementDetailsList: any
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
      field: this.translationServices.getStringWithCurrentLang('description'),
      header: 'Statements.Description',
      fieldType: FieldType.string,
    },
    {
      field: 'amount',
      header: 'Statements.AmountInstallment',
      fieldType: FieldType.string,
    },
    {
      field: 'transactionTypeNature',
      header: 'Statements.Nature',
      fieldType: FieldType.string,
    },
    {
      field: 'originalAmount',
      header: 'Statements.OriginalAmount',
      fieldType: FieldType.string,
    },
    {
      field: 'installmentPlan',
      header: 'Statements.Plan',
      fieldType: FieldType.string,
    },
  ];
  tableConfig: ITableConfig = {
    dontShowClientFilter: true,
    showPagenation: true,
    isClientSide: true,
  };
  reloadList: boolean = false;
  totalstatementDetails: any;
  constructor(public config: DynamicDialogConfig, private profileService: ProfileService, public translationServices: LocalizationService) { }

  ngOnInit(): void {
    this.fullResponse()
  }
  listReloaded(event) {
    this.reloadList = event;
  }

  fullResponse() {
    this.profileService.statementDetail(this.config.data.id).subscribe(
      res => {
        this.totalstatementDetails = res;
        this.statementDetailsList = res.transactions.map((val) => {
          return {
            amount: val.amount > 0 ? val.amount : val.amount * -1,
            creationDate: val.creationDate,
            descriptionAr: val.descriptionAr,
            descriptionEn: val.descriptionEn,
            installmentPlan: `${val.number} / ${val.installmentPlan}`,
            number: val.number,
            originalAmount: val.originalAmount,
            transactionTypeNature: val.transactionTypeNature,
          };
        });;
      }
    )
  }
}
