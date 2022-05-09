import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { TypeOFFiltering } from 'src/app/shared/enums/type-offiltering.enum';
import { IFilterList } from 'src/app/shared/interfaces/filter-list.interface';
import { FieldConfig } from "../../../../../form-builder";
import { FilterFieldTypes } from '../../enums/filter-field-types';
import { FilterStatus } from '../../enums/filter-status';

@Component({
  selector: 'app-table-search',
  template: `
    <div class="filter-box">
      <form [formGroup]="form" class="form-search-table" (ngSubmit)="filter()" >
        <div class="row" >
          <div class="col-md-10" >
            <app-form-builder [form]="form" [model]="model" [fields]="fields" ></app-form-builder>
          </div>
          <div class="col-md-2" >
            <div class="action-filter">
              <ui-button label="Search" type="submit" ></ui-button>
              <ui-button label="Clear" (btnClicked)="clearFilter()" [disabled]="!form.dirty" ></ui-button>
              <ui-button icon="pi pi-file-excel" (btnClicked)="exportList()" styleClass="exportExcel" *ngIf="hasExportExcel"></ui-button>
            </div>
          </div>
        </div>
      </form>
    </div>
  `
})

export class TableSearchComponent implements OnChanges {

  @Input() fields: FieldConfig[];
  @Input() isClientSide: boolean;
  @Input() hasExportExcel: boolean;

  @Output() searchResult = new EventEmitter();
  @Output() exportExcel = new EventEmitter();

  form: FormGroup = new FormGroup({});
  model = {};
  filterObject: IFilterList[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fields.currentValue) {
      this.fields = changes.fields.currentValue;
      this.setObjectFilter(this.fields);
    }

  }

  setObjectFilter(fields: FieldConfig[]): void {

    fields.forEach(res => {
      if (res.fieldGroup)
        this.setObjectFilter(res.fieldGroup);
      else {
        if (res.templateOptions?.filterConfig?.filterType)
          this.filterObject.push(
            {
              nameField: res.key.toString(),
              actualPropertyName: res.templateOptions?.filterConfig?.actualPropertyname,
              typeOfFiltering: res.templateOptions?.filterConfig?.filterType,
              relationWithNext: res.templateOptions?.filterConfig?.relationWithNext,
              typeOfFilterField: res.templateOptions?.filterConfig?.typeOfFilterField,
              value: this.model[res.key.toString()]
            }
          );
      }
    });
  }

  filter(): void {

    this.filterObject.forEach((res, index) => {

      const fieldType = res?.typeOfFilterField;

      if (fieldType && fieldType == FilterFieldTypes.date)
        this.formateDate(res, this.model[res.nameField]);
      else if (fieldType && fieldType == FilterFieldTypes.status)
        this.setStateFilter(res, this.model[res.nameField], index);
      else
        res.value = this.model[res.nameField] || '';
    });

    this.searchResult.emit(this.filterObject);
  }

  setStateFilter(objectFilter: IFilterList, valueState, index) {

    if (valueState === FilterStatus.inactive)
      objectFilter.typeOfFiltering = TypeOFFiltering.notEqual;
    else
      objectFilter.typeOfFiltering = TypeOFFiltering.equal;

    if (valueState !== FilterStatus.all)
      objectFilter.value = null;
    else
      objectFilter.value = valueState;
  }


  formateDate(objectFilter: IFilterList, date) {
    if (!date)
      objectFilter.value = '';
    else {
      const day = `${new Date(date).getDate() < 10 ? "0" : ""}${new Date(date).getDate()}`;
      const year = new Date(date).getFullYear();
      const month = `${(new Date(date).getMonth() + 1) < 10 ? "0" : ""}${new Date(date).getMonth() + 1}`;
      const returnDate = `"${year}-${month}-${day}"`;
      objectFilter.value = returnDate;
    }

  }

  clearFilter() {
    this.form.reset();
    this.searchResult.emit();
  }

  exportList() {
    this.exportExcel.emit(true);
  }

}
