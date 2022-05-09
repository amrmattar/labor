import { Component, Input } from '@angular/core';
import { faCheckSquare, faWindowClose } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'ui-has-feature',
  template: `
    <div class="icon-box">
      <fa-icon class="icon-allow red-icon" *ngIf="!value" [icon]="WindowClose" ></fa-icon>
      <fa-icon class="icon-allow green-icon" *ngIf="value" [icon]="CheckSquare" ></fa-icon>
    </div>
  `,
  styles: [`
    .icon-box {
      width: 100%;
    margin-inline-start: 2rem;
    }
    .icon-allow {
      font-size: 20px;
    }
    .icon-allow.red-icon {
      color: #D32F2F;
    }
    .icon-allow.green-icon {
      color: #122669;
    }
  `]
})
export class HasFeatureComponent {
  WindowClose = faWindowClose;
  CheckSquare = faCheckSquare
  @Input() value;
}
