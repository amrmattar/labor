import {Component, OnInit} from '@angular/core';
import {FieldType} from "@ngx-formly/core";

@Component({
  selector: 'app-toggle',
  template: `
    <p-inputSwitch [formControl]="formControl" [formlyAttributes]="field"></p-inputSwitch>
  `,
  styles: ['']
})
export class ToggleComponent extends FieldType {
}
