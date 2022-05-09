import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-radio',
  template: `
    <ng-container *ngFor="let val of to.options | formlySelectOptions: field | async;">
      <p-radioButton class="csRadio" [label]="val.label" [formControl]="formControl" [formlyAttributes]="field" [value]="val.value"></p-radioButton>
    </ng-container>
  `,
  styles: [`.csRadio {margin-bottom: .5rem; margin-inline-end: 1rem;}`]
})
export class RadioComponent extends FieldType { }
