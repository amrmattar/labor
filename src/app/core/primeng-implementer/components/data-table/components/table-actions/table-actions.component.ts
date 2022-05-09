import { Component, Input, OnInit } from '@angular/core';
import { IActionsConfig } from '../../interfaces/actions-config.interface';
import { ITableActions } from '../../interfaces/table-actions.interface';

@Component({
  selector: 'app-table-actions',
  template: `
    <div class="actions-table">
      <ui-button *ngFor="let action of actions;" [label]="action.name | translate"
                 [styleClass]="action.className + ' m-2 ' + 'add-btn'"
                 (btnClicked)="doAction(action.command)" appHasPermission [permission]="action.permission" [disabled]="action.disableFlag">
      </ui-button>
    </div>
  `,
})
export class TableActionsComponent implements OnInit {

  actions: ITableActions[];

  @Input() actionsConfig: IActionsConfig;

  constructor() {
  }

  ngOnInit(): void {

    this.actions = this.actionsConfig?.tableActions;
  }

  doAction(command) {
    command();
  }

}
