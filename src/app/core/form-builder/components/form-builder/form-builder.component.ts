import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";

@Component({
  selector: 'app-form-builder',
  template:  `
    <formly-form [form]='form' [fields]='fields' [model]='model' ></formly-form>
  `,
})
export class FormBuilderComponent implements OnInit {

  @Input() form: FormGroup = new FormGroup({});
  @Input() fields: FormlyFieldConfig[] = [];
  @Input() model: { [key: string]: any } = {};

  constructor() { }

  ngOnInit(): void {
  }

}
