import { Component } from '@angular/core';
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'app-select',
  template: `
    <!-- <p-dropdown
      [options]="to.options | formlySelectOptions: field | async"
      optionLabel="label"
      optionValue="value"
      [readonly]="to.readonly"
      [showClear]="true"
      [placeholder]="to.placeholder | translate"
      [formControl]="formControl"
      [formlyAttributes]="field"></p-dropdown> -->
        <ng-select  [items]="to.options | formlySelectOptions: field | async"
                    bindLabel="label" 
                    bindValue="value" 
                    [formControl]="formControl"
                    [readonly]="to.readonly"
                    [formlyAttributes]="field"
                    [multiple]="to.select?.isMultiple"
                    [placeholder]="to.placeholder | translate">
        </ng-select>
  `
})
export class SelectComponent extends FieldType {
}
