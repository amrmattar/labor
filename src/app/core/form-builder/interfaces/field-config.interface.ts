import { FormlyFieldConfig } from "@ngx-formly/core";
import { ToFormaly } from ".";
import { ControlsType } from "../enums";
import { CustomTypes } from "../enums/custom-types";

export interface FieldConfig extends FormlyFieldConfig {
  type?: ControlsType | CustomTypes;
  templateOptions?: ToFormaly;
  fieldGroup?: FieldConfig[];
  fieldArray?: FieldConfig;
}
