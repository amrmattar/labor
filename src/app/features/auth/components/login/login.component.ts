import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ControlsType } from 'src/app/core/form-builder/enums';
import { Router } from '@angular/router';
import { LocalizationService, StorageService } from '../../../../core/services';
import { AuthService } from '../../services/auth.service';
import { SeverityToaster } from 'src/app/core/primeng-implementer/components/toaster/enums/severity-toaster.enum';
import { ToastContent } from 'src/app/core/primeng-implementer/components/toaster/interfaces/toast-content.interface';
import { ToasterService } from 'src/app/core/primeng-implementer/components/toaster/services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: ControlsType.text,
      className: "ndp-field",
      templateOptions: {
        placeholder: 'login.UserName',
      },
    },
    {
      key: 'password',
      type: ControlsType.password,
      templateOptions: {
        placeholder: 'login.password',
      },
    },
  ];

  constructor(
    private router: Router,
    private storage: StorageService,
    private authService: AuthService,
    private toasterService: ToasterService,
    public translationServices: LocalizationService,
  ) { }

  ngOnInit(): void { }

  save() {
    this.authService
      .login(this.form.value)
      .then((_) => {
        this.router.navigate(['']);
      })
      .catch((err) => {
        const toasterContent: ToastContent = {
          severity: SeverityToaster.error,
          summary: 'Error',
          detail: 'Invalid Username or Password',
        };
        this.toasterService.showToast(toasterContent);
      });
  }

  changeLang() {
    this.translationServices.toggleLanguage();
  }
}
