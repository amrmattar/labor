import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsMultiSelectComponent } from './cs-multi-select/cs-multi-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { ControlsType, WrappersType } from '../../enums';
import { FieldWrapperModule } from '../../wrappers-modules';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { TranslateModule } from '@ngx-translate/core';
import { DisplySelected } from './enums/disply-selected';




@NgModule({
  declarations: [
    CsMultiSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldWrapperModule,
    MultiSelectModule,
    FormlySelectModule,
    TranslateModule,
    FormlyModule.forChild({
      types: [
        {
          name: ControlsType.mutliselect,
          component: CsMultiSelectComponent,
          wrappers: [WrappersType.radioCheckboxWrapper],
          defaultOptions: {
            templateOptions: {
              multiSelect: {
                displySlected: DisplySelected.chip
              }
            }
          }
        }
      ]
    })
  ]
})
export class CsMultiSelectModule { }
