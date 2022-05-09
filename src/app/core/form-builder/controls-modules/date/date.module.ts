import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsDateComponent } from './cs-date/cs-date.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FieldWrapperModule } from "../../wrappers-modules";
import { FormlyModule } from "@ngx-formly/core";
import { ControlsType, WrappersType } from "../../enums";
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    CsDateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldWrapperModule,
    CalendarModule,
    FormlyModule.forChild({
      types: [
        {
          name: ControlsType.date,
          component: CsDateComponent,
          wrappers: [WrappersType.fieldWrapper],
          defaultOptions: {
            templateOptions: {
              date: {
                dateFormate: 'mm-dd-yy'
              }
            }
          }
        }
      ]
    })
  ]
})
export class DateModule {
}
