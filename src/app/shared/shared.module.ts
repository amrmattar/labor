import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

import { RtlDirective } from './directives';
import { FormBuilderModule } from 'src/app/core/form-builder/form-builder.module';
import { PrimengImplementerModule } from "../core/primeng-implementer/primeng-implementer.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AttachmentViewerComponent } from './components/attachment-viewer/attachment-viewer.component';


const DIRECTIVES = [
  RtlDirective
];

const PIPES = [
];

const COMPONENTS = [
  AttachmentViewerComponent
];

const MODULES = [
  TranslateModule,
  ReactiveFormsModule,
  FormBuilderModule,
  DynamicDialogModule,
  PrimengImplementerModule,
  FontAwesomeModule,
];

const SERVICES = [
  DialogService
];


@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  imports: [
    CommonModule,
    ...MODULES,

  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  providers: [
    ...SERVICES
  ]
})
export class SharedModule {
}
