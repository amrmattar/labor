import { MenuItem } from "primeng/api";
import { ITableActions } from "./table-actions.interface";
import { IActionsDataTable } from "./actions.interface";

export interface IActionsConfig {
    tableActions?: ITableActions[];
    colsActions?: IActionsDataTable[];
}
