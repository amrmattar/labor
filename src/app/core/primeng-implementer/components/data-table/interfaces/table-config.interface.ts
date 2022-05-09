import { FieldConfig } from "src/app/core/form-builder";
import { IEmptyList } from "..";
import { IActionsConfig } from "./actions-config.interface";
import { IFetchTableData } from "./fetch-table-data";

export interface ITableConfig {
    fetchingData?: IFetchTableData;
    actionsConfig?: IActionsConfig;
    showSearch?: boolean;
    showPagenation?: boolean;
    filterObject?: FieldConfig[];
    empty?: IEmptyList;
    actionColReturnRowAndList?: boolean;
    isClientSide?: boolean;
    actionColNamed?: string;
    hasExportExcel?: boolean;
    exportUrl?: string;
    dontShowClientFilter?: boolean;
}

