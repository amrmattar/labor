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
  selector: 'app-e-transfer-form',
  templateUrl: './e-transfer-form.component.html',
})
export class ETransferFormComponent implements OnInit {

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
          allowedTypes: ['png', 'jpeg', 'pdf', 'text', 'xlsx', 'docx', 'msg'],
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
    this.corporateDetails()
  }

  corporateDetails() {
    this.profileService.corporateInfo().subscribe(
      res => {
        this.availableBalance = res.availableBalance
        this.minRequestAmount = res.corporateMinRequestAmount
        this.installmentPlans = res.corporateInstallmentPlans.map(i => {
          return { label: i, value: i }
        });
        this.ETransferRequestFields()
      },
      error => {
      }
    );
  }

  ETransferRequestFields() {
    this.fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'details-subtitle',
            template: this.translationServices.translateIT('otherService.BeneficiallyDetails'),
          },
          {
            key: 'fullName',
            type: ControlsType.text,
            className: 'col-4',
            templateOptions: {
              placeholder: this.translationServices.translateIT('otherService.FullName'),
              required: true,
              maxLength: 100,
            },
          },
          {
            key: 'bankId',
            type: ControlsType.select,
            className: 'col-4',
            templateOptions: {
              placeholder: this.translationServices.translateIT('otherService.Bank'),
              required: true,
              options: this.profileService.BanksLookup()
            }
          },
          {
            key: 'branchName',
            type: ControlsType.text,
            className: 'col-4',
            templateOptions: {
              placeholder: this.translationServices.translateIT('otherService.Branch'),
              maxLength: 50,
            },
          },
          {
            key: 'accountNumber',
            type: ControlsType.number,
            className: 'col-4',
            templateOptions: {
              placeholder: this.translationServices.translateIT('otherService.AccountNumber'),
              required: true,
              maxLength: 50,
            },
          },
          {
            key: 'iBan',
            type: ControlsType.text,
            className: 'col-4',
            templateOptions: {
              maxLength: 29,
              placeholder: this.translationServices.translateIT('otherService.IBan'),
              required: true,
            },
            validators: {
              validation: ['IBanValidate'],
            },
          },
          {
            key: 'email',
            type: ControlsType.text,
            className: 'col-4',
            templateOptions: {
              placeholder: this.translationServices.translateIT('otherService.Email'),
              required: true,
            },
            validators: {
              validation: ['Email']
            }
          },
          {
            className: 'details-subtitle',
            template: this.translationServices.translateIT('otherService.TransferRequestDetails'),
          },
          {
            key: 'requestAmount',
            type: ControlsType.number,
            className: 'col-6',
            templateOptions: {
              placeholder: this.translationServices.translateIT('otherService.Amount'),
              required: true,
              min: 1,
            },
            validation: {
              messages: {
                min: `shouldn't be less than ${this.minRequestAmount}`,
                max: `shouldn't be more than ${this.availableBalance}`,
                required: "Positive number is required"
              }
            },
            validators: {
              validation: ['fullNumber'],
            },
            expressionProperties: {
              'templateOptions.min': () => {
                return this.minRequestAmount
              },
              'templateOptions.max': () => {
                return this.availableBalance
              },
            },
          },
          {
            key: 'installmentPlan',
            type: ControlsType.select,
            className: 'col-6',
            templateOptions: {
              required: true,
              placeholder: this.translationServices.translateIT('otherServiceView.InstallmentPlan'),
              options: this.installmentPlans,
            },
            hooks: {
              onInit: (field: FieldConfig) => {

                field.form.get('installmentPlan').valueChanges.subscribe(val => {
                  if (val)
                    this.plan = val
                  if (this.amount)
                    this.prcessingDetails(this.amount, this.plan)
                });

                field.form.get('requestAmount').valueChanges.subscribe(val => {
                  if (val)
                    this.amount = val
                  if (this.plan)
                    this.prcessingDetails(this.amount, this.plan)
                });
              }
            }
          },
          {
            key: 'comment',
            type: ControlsType.textarea,
            templateOptions: {
              placeholder: this.translationServices.translateIT('otherServiceView.Comment'),
              maxLength: 250,
              required: true,
              fieldConfig: {
                controlClassName: 'text-remark'
              }
            },
            validators: {
              validation: ['remarkComment'],
            }
          }
        ]
      }
    ]

  }

  submitForm() {
    const ETransferFormData = new FormData();
    this.profileService.addETransferRequest(this.form.value).subscribe(
      (res) => {
        if (this.formAttachment.value.file.length > 0) {
          ETransferFormData.append('files', this.formAttachment.value.file[0].file);
          this.profileService.addRequestAttachment(res, ETransferFormData).subscribe(
            (res) => {
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
          )
        } else {
          this.toasterService.showToast(this.toasterContent);
          this.ref.close(true);
        }
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
      if (res == 'confirm')
        this.ref.close();
    });
  }

  prcessingDetails(amount, plan) {
    this.profileService.proccessedData(amount, plan).subscribe(
      res => {
        this.requestDetails = res
      }
    )
  }


  cancelForm() {
    if (this.form.dirty)
      this.openPopup();
    else
      this.ref.close();

  }
}
