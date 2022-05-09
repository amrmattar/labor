import {Injectable} from '@angular/core';
import {MessageService} from "primeng/api";
import {ToastContent} from "../interfaces/toast-content.interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private toastContent: Subject<ToastContent> = new Subject<ToastContent>();

  get _toastContent(): Subject<ToastContent> {
    return this.toastContent;
  }

  constructor(
    private messageService: MessageService
  ) {
  }

  /**
   * TO show toaster Use This Function, Default (Position => top-center) and default (baseZIndex => 1000)
   * @param toastContent set config to toast using this Interface (#ToastContent)
   **/
  showToast(toastContent: ToastContent) {
    this.toastContent.next(toastContent);
    this.messageService.add(toastContent);
  }

  /**
   * This function to clear all Toasts or clear one by sending key for it
   * @param toastKey(Optional)
   **/
  clearToast(toastKey?) {
    this.messageService.clear(toastKey);
  }
}
