import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BtnTypes } from "../enums/btn-types.enum";
import { BtnIconPosition } from "../enums/btn-icon-position.enum";

@Component({
  selector: 'ui-button',
  template: `
    <p-button [type]="type" [label]="label | translate" [icon]="icon" [iconPos]="iconPosition" [badge]="badge"
              [badgeClass]="badgeClass" [loading]="loading" [loadingIcon]="loadingIcon"
              [disabled]="disabled" [styleClass]="styleClass"
              (onClick)="doAction()"></p-button>
  `
})
export class ButtonComponent implements OnInit {

  @Input() type: BtnTypes;
  @Input() label: string;
  @Input() icon: string;
  @Input() iconPosition: BtnIconPosition;
  @Input() badge: string;
  @Input() badgeClass: string;
  @Input() loading: boolean;
  @Input() loadingIcon: string;
  @Input() disabled: boolean;
  @Input() styleClass: string;

  @Output() btnClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  doAction() {
    this.btnClicked.emit();
  }
}
