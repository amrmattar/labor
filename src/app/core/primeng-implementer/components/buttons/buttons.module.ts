import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { ButtonComponent } from './button/button.component';
import { TranslateModule } from '@ngx-translate/core';

const COMPONENTS = [
  ButtonComponent
];

const MODULES = [
  ButtonModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    TranslateModule,
    CommonModule,
    ...MODULES
  ]
})
export class ButtonsModule {
}
