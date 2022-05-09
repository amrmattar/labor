import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-cs-multi-select',
  template: `
  <p-multiSelect 
    [options]="to.options | formlySelectOptions: field | async"
    optionLabel="label" 
    optionValue="value"
    [defaultLabel]="to.placeholder | translate"
    [filter]="true"
    [disabled]="to.disabled"
    [placeholder]="to.placeholder | translate" 
    [formControl]="formControl" 
    [formlyAttributes]="field" ></p-multiSelect>
  `
})
export class CsMultiSelectComponent extends FieldType { }
