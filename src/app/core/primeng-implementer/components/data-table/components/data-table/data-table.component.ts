import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ICols } from '../../interfaces/cols.interface';
import { IEmptyList } from '../../interfaces/empty-list.interface';
import { FieldType } from '../../enums/field-type';
import { ITableConfig } from '../../interfaces/table-config.interface';
import { DataTableService } from '../../service/data-table.service';
import { Subject } from 'rxjs';
import { ToastContent } from '../../../toaster/interfaces/toast-content.interface';
import { SeverityToaster } from '../../../toaster/enums/severity-toaster.enum';
import { ToasterService } from '../../../toaster/services/toaster.service';
import { LocalizationService } from 'src/app/core/services';

@Component({
  selector: 'ui-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() cols: ICols[];

  @Input() emptyList: IEmptyList;
  @Input() reloadList: Subject<boolean> = new Subject();
  @Input() tableConfig: ITableConfig;

  @Output() listingReloaded: EventEmitter<boolean> = new EventEmitter();
  @Output() fullResponse: EventEmitter<any> = new EventEmitter();
  @Output() PageNumClientSide = new EventEmitter<string>();

  @Input() list: any[];
  @Input() clientSideSpinner: boolean;
  @Input() totalRecordes: number;
  dataIsLoading: boolean;

  fieldTypes = FieldType;
  rowActions;
  rowData;

  @ViewChild('menu', { static: false }) menu;
  @ViewChild('dt1', { static: false }) dt1;

  toasterContent: ToastContent = {
    severity: SeverityToaster.success,
    summary: 'Success',
    detail: "It's work fine",
  };

  constructor(
    private toasterService: ToasterService,
    private dataTableService: DataTableService,
    public translationServices: LocalizationService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.tableConfig.isClientSide) {
      if (changes.reloadList?.currentValue) this.fetching();
    } else {
      this.list = changes.list?.currentValue;
      this.totalRecordes = changes.totalRecordes?.currentValue;
    }
  }

  ngOnInit(): void {
    this.dataTableService.tableCols.subscribe((res) => {
      this.cols = res;
    });

    this.tableConfig = { ...this.tableConfig };
    if (
      !this.tableConfig.isClientSide &&
      !this.tableConfig.fetchingData.notFetingOnInit
    )
      this.fetching();
  }

  /**
   * This Method to fetch data from API depeand on fetch Config
   **/
  fetching() {
    this.list = [];
    this.dataIsLoading = true;
    this.totalRecordes = null;

    this.dataTableService.fetchData(this.tableConfig.fetchingData).subscribe(
      (data) => {
        if (this.tableConfig?.fetchingData?.returnFullResponse)
          this.fullResponse.emit(data);

        if (data.items) this.list = data.items;
        else this.list = data;

        this.totalRecordes = data.totalCount;
        this.dataIsLoading = false;
        this.listingReloaded.emit(false);
      },
      (error) => {
        this.list = [];
        this.dataIsLoading = false;
        this.listingReloaded.emit(false);
      }
    );
  }

  export(event) {
    const params = { ...this.tableConfig.fetchingData.params };
    params.PageSize = this.totalRecordes;
    params.PageNumber = 1;

    this.dataTableService.export(this.tableConfig.exportUrl, params).subscribe(
      (response) => {
        const url = window.URL.createObjectURL(response);
        window.open(url);
        this.toasterService.showToast(this.toasterContent);
      },
      (error) => {
        const toasterContent: ToastContent = {
          severity: SeverityToaster.error,
          summary: 'Error',
          detail: error.description,
        };
        this.toasterService.showToast(toasterContent);
      }
    );
  }

  rowChecked(dataRow, listData, callback) {
    callback(dataRow, listData);
  }

  emptyAddAction(callback) {
    callback();
  }

  openMenuAction(rowActions, rowData) {
    this.rowData = rowData;
    this.rowActions = rowActions;
    rowActions.forEach((item) => {
      item.command(rowData);
    });
  }

  paginate(event) {
    if (this.tableConfig.isClientSide) {
      this.PageNumClientSide.emit(event.page + 1);
    } else {
      this.tableConfig.fetchingData.params.PageNumber = event.page + 1;
      this.fetching();
    }
  }

  searchBy(objectFilter) {
    this.tableConfig.fetchingData.params.Filter = objectFilter;
    this.tableConfig.fetchingData.params.PageNumber = 1;
    this.fetching();
  }

  rowClicked(row, list, callback) {
    if (!this.tableConfig.actionColReturnRowAndList) callback(row);
    else {
      const Response = {
        row,
        list,
      };
      callback(Response);
    }
  }

  manageActionLabelAndIcon(row, callback) {
    if (callback)
      return typeof callback === 'string' ? callback : callback(row);
  }
}
