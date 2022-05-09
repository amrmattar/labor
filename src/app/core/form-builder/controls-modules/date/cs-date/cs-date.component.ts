import { Component, OnInit } from '@angular/core';
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'app-cs-date',
  template: `
    <p-calendar 
      [formControl]="formControl" 
      [formlyAttributes]="field"
      [maxDate]='to?.date?.maxDate'
      [placeholder]="to.placeholder"
      [minDate]="to?.date?.minDate"
      [dateFormat]="to?.date?.dateFormate"
      [disabledDates]="to?.date?.disabledDates"
      [disabledDays]="to?.date?.disabledDays"
      [required]="to.required"
      [view]="to?.date?.typeOfView? to?.date?.typeOfView:'date'"
      [ngClass]="showError? 'ng-invalid ng-dirty': ''"
      (ngModelChange)="dateSelected($event)" ></p-calendar>
  `
})
export class CsDateComponent extends FieldType {

  dateSelected(event) {
    console.log(event);

    // const selectedDate = new Date(event);
    // console.log(event);

    // const day = `${selectedDate.getDate() < 10 ? "0" : ""}${selectedDate.getDate()}`;
    // const year = selectedDate.getFullYear();
    // const month = `${(selectedDate.getMonth() + 1) < 10 ? "0" : ""}${selectedDate.getMonth() + 1}`;
    // const date = `${day}-${month}-${year}`;

    // this.formControl.setValue(date);
  }
}
