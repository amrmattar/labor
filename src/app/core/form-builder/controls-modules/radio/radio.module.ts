import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio/radio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ControlsType, WrappersType } from '../../enums';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RadioCheckboxWrappersModule } from '../../wrappers-modules/radio-checkbox-wrappers/radio-checkbox-wrappers.module';



@NgModule({
  declarations: [
    RadioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    RadioCheckboxWrappersModule,
    FormlyModule.forChild({
      types: [
        {
          name: ControlsType.radio,
          component: RadioComponent,
          wrappers: [WrappersType.radioCheckboxWrapper]
        }
      ]
    }),
    FormlySelectModule
  ]
})
export class RadioModule { }
