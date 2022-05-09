import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadOfControlsComponent } from './head-of-controls/head-of-controls.component';
import { FormlyModule } from '@ngx-formly/core';
import { CustomTypes } from '../../enums/custom-types';



@NgModule({
  declarations: [
    HeadOfControlsComponent
  ],
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [
        {
          name: CustomTypes.headOfControl,
          component: HeadOfControlsComponent
        }
      ]
    })
  ]
})
export class HeadGroupOfControlsModule { }
