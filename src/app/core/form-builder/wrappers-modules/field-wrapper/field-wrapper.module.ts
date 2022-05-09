import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from "@ngx-formly/core";
import {FieldWrapperComponent} from './field-wrapper/field-wrapper.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    FieldWrapperComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'field-form',
          component: FieldWrapperComponent
        }
      ]
    })
  ]
})
export class FieldWrapperModule {
}
