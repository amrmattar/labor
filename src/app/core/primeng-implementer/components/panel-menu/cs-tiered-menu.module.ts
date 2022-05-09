import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TieredMenuComponent} from './tiered-menu/tiered-menu.component';
import {TieredMenuModule} from "primeng/tieredmenu";

const COMPONENTS = [
  TieredMenuComponent
];

const MODULES = [
  TieredMenuModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CsTieredMenuModule {
}
