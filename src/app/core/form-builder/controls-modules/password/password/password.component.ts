import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { LocalizationService } from 'src/app/core/services';

@Component({
  selector: 'app-password-left-icon',
  template: `
    <div class="passwordLogin" >
      <div class='p-field' >
            <label>
              {{to.label}}
              <span *ngIf="to.required && to.hideRequiredMarker !== true" class="required">*</span>
            </label>

        <span  [class]="currentLang=='ar'?  'p-input-icon-left': 'p-input-icon-right' ">
            <i class="pi" [ngClass]="passwordVisiblity? 'pi-eye-slash' : 'pi-eye'"  (click)="togglePassword()"></i>
            <input [placeholder]="!to?.placeholder? '':to?.placeholder | translate" [type]="typePassControl" class="p-inputtext p-component" pInputText [formControl]="formControl" [formlyAttributes]="field"  />
        </span>
      </div>
        
    </div>
  `,
  styleUrls: ['./password.component.scss']
})

export class PasswordComponent extends FieldType implements OnInit {
  currentLang: any;

  constructor(public translationServices: LocalizationService,) {
    super();
  }
  ngOnInit(): void {
    this.LangChange()
  }

  LangChange() {
    this.translationServices.checkOnChangeLang().subscribe(
      res => {
        this.currentLang = res.lang
      }
    )
  }

  passwordVisiblity: boolean = false;

  togglePassword() {
    this.passwordVisiblity = !this.passwordVisiblity;
  }

  get typePassControl(): string {
    return this.passwordVisiblity ? 'text' : 'password';
  }
}
