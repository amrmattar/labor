import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PositionToaster} from "../enums/position-toaster.enum";
import {ToasterService} from "../services/toaster.service";
import {ToastContent} from "../interfaces/toast-content.interface";

@Component({
  selector: 'ui-toaster',
  template: `
    <p-toast [key]="toastConfig.key" [position]="toastConfig.position" [baseZIndex]="toastConfig.baseZIndex"
             (onClose)="closed()"></p-toast>
  `
})
export class ToasterComponent implements OnInit {

  toastConfig: ToastContent = {
    position: PositionToaster.topCenter,
    baseZIndex: 1000
  };

  @Output() toastClosed: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private toastService: ToasterService
  ) {
  }

  ngOnInit(): void {
    this.toastService._toastContent.subscribe(
      (config) => {
        this.toastConfig = {...this.toastConfig, ...config};
      }
    );
  }

  closed() {
    this.toastClosed.emit();
  }

}
