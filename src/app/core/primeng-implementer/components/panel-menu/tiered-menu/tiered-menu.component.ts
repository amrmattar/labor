import {Component, Input, OnInit} from '@angular/core';
import {IItemsPanelMenu} from "../interfaces/items-panel-menu.interface";

@Component({
  selector: 'ui-panel-menu',
  template: `
    <p-tieredMenu [model]="items" [styleClass]="styleClass"></p-tieredMenu>
  `
})
export class TieredMenuComponent implements OnInit {

  @Input() items: IItemsPanelMenu[];
  @Input() styleClass: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
