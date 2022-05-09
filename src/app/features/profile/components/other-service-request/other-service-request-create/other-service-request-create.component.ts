import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FieldConfig } from 'src/app/core/form-builder';
import { ControlsType } from 'src/app/core/form-builder/enums';
import { SeverityToaster } from 'src/app/core/primeng-implementer/components/toaster/enums/severity-toaster.enum';
import { ToastContent } from 'src/app/core/primeng-implementer/components/toaster/interfaces/toast-content.interface';
import { ToasterService } from 'src/app/core/primeng-implementer/components/toaster/services/toaster.service';
import { AppDialogService } from 'src/app/core/primeng-implementer/services/dialog/app-dialog.service';
import { LocalizationService } from 'src/app/core/services';
import { WarningComponent } from 'src/app/shared/components/warnning-msg';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-other-service-request-create',
  templateUrl: './other-service-request-create.component.html',
})
export class OtherServiceRequestCreateComponent implements OnInit {
  availableBalance: number;
  minRequestAmount: number;
  differenceFlag: number;
  form: FormGroup = new FormGroup({});
  model = {};
  fields: FieldConfig[];
  formAttachment: FormGroup = new FormGroup({});
  modelAttachment = {};
  fieldsAttachment: FieldConfig[] = [
    {
      key: 'file',
      type: ControlsType.attachment,
      templateOptions: {
        label: this.translationServices.translateIT('otherServiceView.Attachments'),
        fieldConfig: {
          controlClassName: 'logoCorporate',
        },
        attachment: {
          isServerSide: false,
          multiple: true,
          allowedTypes: ['png', 'jpeg', 'pdf'],
        },
      },
    },
  ];
  statementID: string;
  toasterContent: ToastContent = {
    severity: SeverityToaster.success,
    summary: 'Success',
    detail: "It's work fine",
  };
  installmentPlans: any[];
  plan: any;
  amount: any;
  requestDetails: any;

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    public profileService: ProfileService,
    private toasterService: ToasterService,
    private dialogService: AppDialogService,
    public translationServices: LocalizationService
  ) { }

  ngOnInit(): void {
    this.corporateDetails();
  }
  corporateDetails() {
    this.profileService.corporateInfo().subscribe(
      (res) => {
        this.availableBalance = res.availableBalance;
        this.minRequestAmount = res.corporateMinRequestAmount;
        this.installmentPlans = res.corporateInstallmentPlans.map((i) => {
          return { label: i, value: i };
        });
        this.otherServicesRequestFields();
      },
      (error) => { }
    );
  }

  otherServicesRequestFields() {
    this.fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'name',
            type: ControlsType.text,
            className: 'col-md-4',
            templateOptions: {
              placeholder: this.translationServices.translateIT('otherServiceView.RequiredServiceName'),
              required: true,
              maxLength: 50,
            },
          },
          {
            key: 'requestAmount',
            type: ControlsType.number,
            className: 'col-md-4',
            templateOptions: {
              placeholder: this.translationServices.translateIT('otherServiceView.Amount'),
              required: true,
              min: 1,
            },
            validation: {
              messages: {
                min: `shouldn't be less than ${this.minRequestAmount}`,
                max: `shouldn't be more than ${this.availableBalance}`,
                required: 'Positive number is required',
              },
            },
            validators: {
              validation: ['fullNumber'],
            },
            expressionProperties: {
              'templateOptions.min': () => {
                return this.minRequestAmount;
              },
              'templateOptions.max': () => {
                return this.availableBalance;
              },
            },
          },
          {
            key: 'installmentPlan',
            type: ControlsType.select,
            className: 'col-md-4',
            templateOptions: {
              required: true,
              placeholder: this.translationServices.translateIT('otherServiceView.InstallmentPlan'),
              options: this.installmentPlans,
            },
            hooks: {
              onInit: (field: FieldConfig) => {
                field.form.get('installmentPlan').valueChanges.subscribe((val) => {
                  if (val) this.plan = val;
                  if (this.amount) this.prcessingDetails(this.amount, this.plan);
                });

                field.form.get('requestAmount').valueChanges.subscribe((val) => {
                  if (val) this.amount = val;
                  if (this.plan) this.prcessingDetails(this.amount, this.plan);
                });
              },
            },
          },
          {
            key: 'comment',
            type: ControlsType.textarea,
            templateOptions: {
              placeholder: this.translationServices.translateIT('otherServiceView.Comment'),
              maxLength: 250,
              required: true,
              fieldConfig: {
                controlClassName: 'text-remark',
              },
            },
            validators: {
              validation: ['remarkComment'],
            },
          },
        ]
      }
    ]
  }

  submitForm() {
    const attachementsBlob: Array<Blob> = this.formAttachment.value.file.map(
      (item) => item.file
    );

    this.profileService
      .saveotherService(this.form.value, attachementsBlob)
      .subscribe(
        (response) => {
          this.toasterService.showToast(this.toasterContent);
          this.ref.close(true);
        },
        (error) => {
          const toasterContent: ToastContent = {
            severity: SeverityToaster.error,
            summary: 'Error',
            detail: error.description,
          };
          this.toasterService.showToast(toasterContent);
        }
      );
  }

  openPopup() {
    const Popup = this.dialogService.openDialog(WarningComponent, {
      width: '30%',
    });

    Popup.onClose.subscribe((res) => {
      if (res == 'confirm') this.ref.close();
    });
  }

  prcessingDetails(amount, plan) {
    this.profileService.proccessedData(amount, plan).subscribe((res) => {
      this.requestDetails = res;
    });
  }

  cancelForm() {
    if (this.form.dirty) this.openPopup();
    else this.ref.close();
  }
}
