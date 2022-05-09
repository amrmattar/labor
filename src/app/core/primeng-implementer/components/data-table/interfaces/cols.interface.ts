import { FieldType } from "../enums/field-type";
import { IStatusConfig } from "./status-config.interface";

export interface ICols {
  field: string;
  header: string;
  fieldType: FieldType;
  fieldTranslate?: boolean;
  statusConfig?: IStatusConfig[] | string;
  command?: Function;
  classNameCell?: string;
  dateFormat?: string;
  fieldWithCancelBtn?: string[];
  actualState?: string[];
}
