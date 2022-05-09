import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { ControlsType, WrappersType } from '../../enums';
import { CsSelectButtonComponent } from './cs-select-button/cs-select-button.component';
import { RadioCheckboxWrappersModule } from '../../wrappers-modules/radio-checkbox-wrappers/radio-checkbox-wrappers.module';
import {FormlySelectModule} from "@ngx-formly/core/select";



@NgModule({
  declarations: [
    CsSelectButtonComponent
  ],
    imports: [
        CommonModule,
        SelectButtonModule,
        ReactiveFormsModule,
        RadioCheckboxWrappersModule,
        FormlyModule.forChild({
            types: [
                {
                    name: ControlsType.selectButton,
                    component: CsSelectButtonComponent,
                    wrappers: [WrappersType.radioCheckboxWrapper],
                }
            ]
        }),
        FormlySelectModule
    ]
})
export class CsselectButtonModule { }
