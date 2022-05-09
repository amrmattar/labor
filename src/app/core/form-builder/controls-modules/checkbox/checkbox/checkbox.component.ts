import {Component, OnInit} from '@angular/core';
import {FieldType} from "@ngx-formly/core";

@Component({
  selector: 'app-checkbox',
  template: `
    <ng-container *ngFor="let val of to.options | formlySelectOptions: field | async;">
      <p-checkbox class="csCheckBox" [label]="val.label" [formControl]="formControl" [formlyAttributes]="field" [value]="val.value"></p-checkbox>
    </ng-container>
  `,
  styles: [`.csCheckBox {margin-bottom: .5rem; margin-inline-end: 1rem;}`]
})
export class CheckboxComponent extends FieldType {
}
