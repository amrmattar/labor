import { Component } from '@angular/core';
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'app-cs-text',
  template: `
    <input pInputText class="p-inputtext p-component" [type]="to.type" [formControl]="formControl"
           [formlyAttributes]="field" [placeholder]="!to?.placeholder? '':to?.placeholder | translate" [ngClass]="showError? 'ng-invalid ng-dirty': ''">
  `
})
export class CsTextComponent extends FieldType {
}
