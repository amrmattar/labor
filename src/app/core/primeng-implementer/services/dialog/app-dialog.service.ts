import {Injectable, Type} from '@angular/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Injectable({
    providedIn: 'root'
})
export class AppDialogService {

    constructor(
        private dialogService: DialogService
    ) {
    }

    openDialog(componentType: Type<any>, config: DynamicDialogConfig): DynamicDialogRef {
        return this.dialogService.open(componentType, config);
    }
}
