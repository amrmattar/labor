import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import {DataTableComponent} from './components/data-table/data-table.component';
import {ButtonsModule} from "../buttons/buttons.module";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {StatusComponent} from './components/status/status.component';
import {HasFeatureComponent} from './components/has-feature/has-feature.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableSearchComponent} from './components/table-search/table-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBuilderModule} from "../../../form-builder/form-builder.module";
import {TableActionsComponent} from './components/table-actions/table-actions.component';
import {TranslateModule} from "@ngx-translate/core";
import {CheckboxModule} from 'primeng/checkbox';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {HasPermissionDirective} from "../../../directives/has-permission/has-permission.directive";


const COMPONENTS = [
  DataTableComponent,
  StatusComponent,
  HasFeatureComponent,
  TableSearchComponent,
  TableActionsComponent,
  HasPermissionDirective
];

const MODULES = [
  TableModule,
  PaginatorModule,
  ButtonsModule,
  ProgressSpinnerModule,
  FontAwesomeModule,
  MenuModule,
  ButtonModule,
  RippleModule,
  ReactiveFormsModule,
  FormBuilderModule,
  TranslateModule,
  CheckboxModule,
  FormsModule,
  ToggleButtonModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class DataTableModule {
}
