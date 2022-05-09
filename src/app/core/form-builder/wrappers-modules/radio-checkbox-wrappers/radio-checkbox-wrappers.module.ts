import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioCheckboxWrappersComponent} from './radio-checkbox-wrappers/radio-checkbox-wrappers.component';
import {FormlyModule} from "@ngx-formly/core";
import {TranslateModule} from "@ngx-translate/core";
import {WrappersType} from "../../enums";


@NgModule({
  declarations: [
    RadioCheckboxWrappersComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: WrappersType.radioCheckboxWrapper,
          component: RadioCheckboxWrappersComponent
        }
      ]
    })
  ]
})
export class RadioCheckboxWrappersModule {
}
