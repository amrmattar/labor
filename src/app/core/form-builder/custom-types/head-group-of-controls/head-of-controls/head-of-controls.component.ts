import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-head-of-controls',
  template: `
    <div class="head-of-controls">
      <div>
        <img [src]="to.fieldConfig?.leftIcon" width="80%" />
      </div>
      <p>
        {{to.label}}
      </p>
    </div>
  `
})
export class HeadOfControlsComponent extends FieldType {
}
