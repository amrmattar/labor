import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsInputMaskComponent } from './cs-input-mask/cs-input-mask.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapperModule } from '../../wrappers-modules';
import { FormlyModule } from '@ngx-formly/core';
import { ControlsType, WrappersType } from '../../enums';
import { InputMaskModule } from 'primeng/inputmask';




@NgModule({
  declarations: [
    CsInputMaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldWrapperModule,
    InputMaskModule,
    FormlyModule.forChild({
      types: [
        {
          name: ControlsType.inputMask,
          component: CsInputMaskComponent,
          wrappers: [WrappersType.fieldWrapper]
        }
      ]
    })
  ]
})
export class CsInputMaskModule { }
