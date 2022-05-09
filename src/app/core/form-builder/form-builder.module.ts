import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import {
  AttachmentModule,
  CheckboxControlModule,
  CsMultiSelectModule,
  CsselectButtonModule,
  CsTextareaModule,
  DateModule,
  InputMaskModule,
  PasswordModule,
  RadioModule,
  SelectModule,
  TextModule,
  ToggleModule,
} from './controls-modules';
import { FormControl, ValidationErrors } from '@angular/forms';
import { HeadGroupOfControlsModule, RepeatSectionModule } from './custom-types';

const MODULES = [
  TextModule,
  CheckboxControlModule,
  RadioModule,
  PasswordModule,
  SelectModule,
  ToggleModule,
  DateModule,
  AttachmentModule,
  CsselectButtonModule,
  InputMaskModule,
  CsMultiSelectModule,
  CsTextareaModule,
  RepeatSectionModule,
  HeadGroupOfControlsModule
];

export function arValidate(control: FormControl): ValidationErrors {
  return !control.value || /^[\u0621-\u064A0-9_@./#!&+-_ ]+$/.test(control.value)
    ? null
    : { checkar: true };
}

export function enValidate(control: FormControl): ValidationErrors {
  return !control.value || /^[a-zA-Z0-9_@./#!&+-_ ]+$/.test(control.value)
    ? null
    : { checken: true };
}

export function nameLength(control: FormControl): ValidationErrors {
  return !control.value || /^.{0,20}$/.test(control.value)
    ? null
    : { nameLength: true };
}

export function IBanValidate(control: FormControl): ValidationErrors {
  return !control.value || /EG[0-9]{27}/.test(control.value)
    ? null
    : { IBanChecker: true };
}

export function EmailValidate(control: FormControl): ValidationErrors {
  return !control.value ||
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      control.value
    )
    ? null
    : { email: true };
}

export function PasswordValidate(control: FormControl): ValidationErrors {
  return !control.value ||
    /^[a-zA-Z0-9]{8,25}$/.test(
      control.value
    )
    ? null
    : { password: true };
}

export function NIDValidate(control: FormControl): ValidationErrors {
  return !control.value ||
    /^[0-9]{14,14}$/.test(
      control.value
    )
    ? null
    : { NID: true };
}
export function CommercialRNValidate(control: FormControl): ValidationErrors {
  return !control.value ||
    /^[0-9]{9,9}$/.test(
      control.value
    )
    ? null
    : { CommercialRN: true };
}

export function numberValidate(control: FormControl): ValidationErrors {
  return !control.value ||
    /^[a-zA-Z0-9]*$/.test(
      control.value
    )
    ? null
    : { number: true };
}
export function fullnumberValidate(control: FormControl): ValidationErrors {
  return !control.value ||
    /^-?[0-9]*$/.test(
      control.value
    )
    ? null
    : { fullNumber: true };
}
export function remarkComment(control: FormControl): ValidationErrors {
  return !control.value ||
    /\d|\w|\p{Arabic}/.test(
      control.value
    )
    ? null
    : { remarkComment: true };
}
export function twoDecimals(control: FormControl): ValidationErrors {
  return !control.value ||
    /^\d+(\.\d{1,2})?$/.test(
      control.value
    )
    ? null
    : { twoDecimals: true };
}



@NgModule({
  declarations: [FormBuilderComponent],
  imports: [
    CommonModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      validators: [
        { name: 'checkAr', validation: arValidate },
        { name: 'checkEn', validation: enValidate },
        { name: 'IBanValidate', validation: IBanValidate },
        { name: 'Email', validation: EmailValidate },
        { name: 'Password', validation: PasswordValidate },
        { name: 'Number', validation: numberValidate },
        { name: 'fullNumber', validation: fullnumberValidate },
        { name: 'remarkComment', validation: remarkComment },
        { name: 'twoDecimals', validation: twoDecimals },
        { name: 'nameLength', validation: nameLength },
        { name: 'NID', validation: NIDValidate },
        { name: 'CommercialRN', validation: CommercialRNValidate },
      ],
      validationMessages: [
        { name: 'required', message: 'field is required.' },
        {
          name: 'checkar',
          message: 'field should contain only Arabic characters.',
        },
        {
          name: 'checken',
          message: 'field should contain only English characters.',
        },
        {
          name: 'IBanChecker',
          message: "I Ban Number' is not in the correct format (EG in first)",
        },
        { name: 'email', message: 'is invalid' },
        {
          name: 'password',
          message: 'Password must contain Capital letters , numbers & signes',
        },
        {
          name: 'number',
          message: ' accepts characters and numbers only',
        },
        {
          name: 'fullNumber',
          message: "don't accept decimal numbers",
        },
        {
          name: 'remarkComment',
          message: "accepts characters and numbers only",
        },
        {
          name: 'twoDecimals',
          message: "no more than 2 decimals",
        },
        {
          name: 'nameLength',
          message: "max length is 20",
        },
        {
          name: 'NID',
          message: "should be only 14 digits",
        },
        {
          name: 'CommercialRN',
          message: "should accept only 9 digits",
        },
      ],
    }),
    ...MODULES,
  ],
  exports: [FormBuilderComponent],
})
export class FormBuilderModule { }
