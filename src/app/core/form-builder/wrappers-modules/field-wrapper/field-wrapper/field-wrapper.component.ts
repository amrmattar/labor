import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FieldWrapper} from '@ngx-formly/core';

@Component({
  selector: 'app-formly-wrapper-form-field',
  templateUrl: './field-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['field-wrapper.component.scss']
})

export class FieldWrapperComponent extends FieldWrapper {
}
