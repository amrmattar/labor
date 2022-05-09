import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import {ToggleComponent} from './toggle/toggle.component';
import {ControlsType, WrappersType} from "../../enums";
import {InputSwitchModule} from 'primeng/inputswitch';
import {RadioCheckboxWrappersModule} from "../../wrappers-modules/radio-checkbox-wrappers/radio-checkbox-wrappers.module";


@NgModule({
  declarations: [
    ToggleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputSwitchModule,
    RadioCheckboxWrappersModule,
    FormlyModule.forChild({
      types: [
        {
          name: ControlsType.toggle,
          component: ToggleComponent,
          wrappers: [WrappersType.radioCheckboxWrapper]
        }
      ]
    })
  ]
})
export class ToggleModule {
}
