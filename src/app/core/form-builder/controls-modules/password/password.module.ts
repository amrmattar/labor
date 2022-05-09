import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { PasswordComponent } from './password/password.component';
import { ControlsType } from "../../enums";
import { ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormlyModule.forChild({
      types: [
        {
          name: ControlsType.password,
          component: PasswordComponent
        }
      ]
    }),
    TranslateModule,
  ]
})
export class PasswordModule { }
