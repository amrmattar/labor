import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'app-repeater',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;"  [ngClass]="to.repeater?.classNameContainer">
      <formly-field [ngClass]="to.repeater?.classNameFieldsContainer" [field]="field"></formly-field>
      <div [ngClass]="to.repeater?.classNameRemoveBtn">
        <button pButton type="button" [label]="to.repeater?.removeText" [icon]="to.repeater?.removeIcon" (click)="remove(i)" ></button>
      </div>
    </div>
    <div [ngClass]="to.repeater?.classNameAddBtn" >
      <button pButton type="button" [label]="to.repeater?.addText" [icon]="to.repeater?.addIcon" (click)="add()"></button>
    </div>
  `
})
export class RepeaterComponent extends FieldArrayType { }
