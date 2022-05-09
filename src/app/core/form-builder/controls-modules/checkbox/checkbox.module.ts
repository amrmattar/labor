import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from 'primeng/checkbox';
import {FormlyModule} from "@ngx-formly/core";
import {CheckboxComponent} from './checkbox/checkbox.component';
import {FormlySelectModule} from "@ngx-formly/core/select";
import {ControlsType, WrappersType} from '../../enums';
import {RadioCheckboxWrappersModule} from "../../wrappers-modules/radio-checkbox-wrappers/radio-checkbox-wrappers.module";


@NgModule({
  declarations: [
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxModule,
    RadioCheckboxWrappersModule,
    FormlyModule.forChild({
      types: [
        {
          name: ControlsType.checkBox,
          component: CheckboxComponent,
          wrappers: [WrappersType.radioCheckboxWrapper]
        }
      ]
    }),
    FormlySelectModule
  ]
})
export class CheckboxControlModule {
}
