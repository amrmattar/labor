import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {ToasterComponent} from './toaster/toaster.component';
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [
    ToasterComponent
  ],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports: [
    ToasterComponent
  ],
  providers: [
    MessageService
  ]
})
export class ToasterModule {
}
