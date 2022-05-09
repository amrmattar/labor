import { MenuItem } from "primeng/api";

export interface IActionsDataTable extends Omit<MenuItem, 'label' | 'icon'> {
    permission?: string;
    label?: string | Function;
    icon?: string | Function;
}
