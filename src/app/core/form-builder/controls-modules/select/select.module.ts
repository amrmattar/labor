import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select/select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FieldWrapperModule} from "../../wrappers-modules";
import {FormlyModule} from "@ngx-formly/core";
import {ControlsType, WrappersType} from "../../enums";
import {DropdownModule} from 'primeng/dropdown';
import {FormlySelectModule} from "@ngx-formly/core/select";
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    FieldWrapperModule,
    TranslateModule,
    FormlyModule.forChild({
      types: [
        {
          name: ControlsType.select,
          component: SelectComponent,
          wrappers: [WrappersType.fieldWrapper]
        }
      ]
    }),
    FormlySelectModule
  ]
})
export class SelectModule {
}
