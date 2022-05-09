import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-branch-form',
  template: `
    <p>You sure to proceed?</p>
    <div class="form-actions">
      <ui-button
        type="submit"
        label="Confirm"
        (click)="cancelForm()"
      ></ui-button>
      <ui-button
        type="button"
        [label]="'General.Cancel' | translate"
        styleClass="p-button-link"
        (click)="cancelWarnning()"
      ></ui-button>
    </div>
  `,
})
export class ConfirmationComponent implements OnInit {
  constructor(public ref: DynamicDialogRef) { }

  ngOnInit(): void { }

  cancelForm() {
    this.ref.close('confirm');
  }
  cancelWarnning() {
    this.ref.close();
  }
}
