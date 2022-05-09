import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from "@ngx-formly/core";
import { ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from "@ngx-translate/core";

import { CsTextComponent } from './cs-text/cs-text.component';
import { FieldWrapperModule } from '../../wrappers-modules';
import { ControlsType, WrappersType } from '../../enums';


@NgModule({
  declarations: [
    CsTextComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FieldWrapperModule,
    FormlyModule.forChild({
      types: [
        {
          name: ControlsType.text,
          component: CsTextComponent,
          wrappers: [WrappersType.fieldWrapper],
          defaultOptions: {
            templateOptions: {
              type: 'text'
            }
          }
        },
        {
          name: ControlsType.email,
          extends: ControlsType.text,
          defaultOptions: {
            templateOptions: {
              type: 'email'
            }
          }
        },
        {
          name: ControlsType.number,
          extends: ControlsType.text,
          defaultOptions: {
            templateOptions: {
              type: 'number'
            }
          }
        }
      ]
    }),
    TranslateModule,
  ]
})
export class TextModule {
}
