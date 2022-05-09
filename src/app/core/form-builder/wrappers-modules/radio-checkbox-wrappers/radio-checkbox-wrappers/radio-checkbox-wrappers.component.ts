import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FieldWrapper} from "@ngx-formly/core";

@Component({
  selector: 'app-radio-checkbox-wrappers',
  templateUrl: './radio-checkbox-wrappers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./radio-checkbox-wrappers.component.scss']
})
export class RadioCheckboxWrappersComponent extends FieldWrapper {
}
