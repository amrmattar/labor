import {Component, Input, OnInit} from '@angular/core';
import {IStatusConfig} from "../../interfaces/status-config.interface";

@Component({
  selector: 'ui-status',
  template: `
    <span class="status-cell" [style.background]="selectedStatus.color">{{selectedStatus.displayValue}}</span>
  `,
  styles: [`.status-cell {
    background-color: #ddd;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 10px;
  }`]
})
export class StatusComponent implements OnInit {

  selectedStatus: IStatusConfig;

  @Input() value;
  @Input() statusConfig: IStatusConfig[];

  constructor() {
  }

  ngOnInit(): void {
    const selected = this.statusConfig.filter((item) => item.matchWith === this.value);
    this.selectedStatus = selected[0];
  }

}
