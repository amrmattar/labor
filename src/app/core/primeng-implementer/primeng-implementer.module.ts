import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterModule } from './components/toaster/toaster.module';
import { DataTableModule } from './components/data-table/data-table.module';
import { ButtonsModule } from './components/buttons/buttons.module';

import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { CsTieredMenuModule } from './components/panel-menu/cs-tiered-menu.module';
import { DialogService } from 'primeng/dynamicdialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChartModule } from 'primeng/chart';

const COMPONENTS = [];

const MODULES = [
  ToasterModule,
  DataTableModule,
  ButtonsModule,
  MenubarModule,
  AvatarModule,
  SkeletonModule,
  CsTieredMenuModule,
  BreadcrumbModule,
  PanelMenuModule,
  SelectButtonModule,
  ConfirmDialogModule,
  TabViewModule,
  InputSwitchModule,
  MenuModule,
  TabMenuModule,
  ProgressSpinnerModule,
  ChartModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
  providers: [DialogService],
})
export class PrimengImplementerModule {}
