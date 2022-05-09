import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-cs-select-button',
  template: `
    <p-selectButton class="selectButton" [options]="to.options" [formControl]="formControl" optionLabel="label" optionValue="value"></p-selectButton>
  `
})
export class CsSelectButtonComponent extends FieldType { }
