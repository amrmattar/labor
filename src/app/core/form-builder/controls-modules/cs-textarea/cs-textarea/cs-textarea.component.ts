import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-cs-textarea',
  template: `
    <textarea pInputTextarea [formControl]="formControl" [formlyAttributes]="field" [rows]="to.rows" [cols]="to.cols"></textarea>
  `
})
export class CsTextareaComponent extends FieldType { }
