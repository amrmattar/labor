import { FormlyTemplateOptions } from "@ngx-formly/core";
import { AttachmentControlInterface } from "../controls-modules/attachment/attachment-control.interface";
import { IDateControl } from "../controls-modules/date/date";
import { FieldWrapper } from "../wrappers-modules/field-wrapper/field-wrapper.interface";
import { FilterConfig } from "./filter-config.interface";
import { IInputMask } from "./input-mask";
import { IMutliSelect } from "./mutli-select";
import { IRepeater } from "./repeater";
import { ISelect } from "./select";

export interface ToFormaly extends FormlyTemplateOptions {
  fieldConfig?: FieldWrapper;
  filterConfig?: FilterConfig;
  date?: IDateControl;
  attachment?: AttachmentControlInterface;
  inputMask?: IInputMask;
  mutliSelect?: IMutliSelect;
  repeater?: IRepeater;
  select?: ISelect;
}
