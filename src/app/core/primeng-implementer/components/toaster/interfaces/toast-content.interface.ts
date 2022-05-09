import {SeverityToaster} from "../enums/severity-toaster.enum";
import {PositionToaster} from "../enums/position-toaster.enum";

export interface ToastContent{
  key?: string;
  severity?: SeverityToaster;
  summary?: string;
  detail?: string;
  position?: PositionToaster;
  baseZIndex?: number;
}
