import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-cs-input-mask',
  template: `
    <p-inputMask 
      [formControl]="formControl" 
      [formlyAttributes]="field" 
      [placeholder]="to.placeholder" 
      [mask]="to?.inputMask?.mask"
      [slotChar]="to?.inputMask?.slotChar? to?.inputMask?.slotChar: ''"
      [characterPattern]="to.inputMask?.characterPattern"
      [ngClass]="showError? 'ng-invalid ng-dirty': ''"
      [autoClear]="false"></p-inputMask>
  `
})
export class CsInputMaskComponent extends FieldType { }
