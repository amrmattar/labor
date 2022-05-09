import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeaterComponent } from './repeater/repeater.component';
import { FormlyModule } from '@ngx-formly/core';
import { CustomTypes } from '../../enums/custom-types';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    RepeaterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormlyModule.forChild({
      types: [
        {
          name: CustomTypes.repeat,
          component: RepeaterComponent
        }
      ]
    })
  ]
})
export class RepeatSectionModule { }
