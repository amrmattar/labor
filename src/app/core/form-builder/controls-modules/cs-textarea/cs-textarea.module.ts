import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { ControlsType, WrappersType } from '../../enums';
import { CsTextareaComponent } from './cs-textarea/cs-textarea.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldWrapperModule } from '../../wrappers-modules';



@NgModule({
  declarations: [
    CsTextareaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    FieldWrapperModule,
    FormlyModule.forChild({
      types: [
        {
          name: ControlsType.textarea,
          component: CsTextareaComponent,
          wrappers: [WrappersType.fieldWrapper]
        }
      ]
    })
  ]
})
export class CsTextareaModule { }
