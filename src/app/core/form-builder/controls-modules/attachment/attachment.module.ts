import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { AttachmentServerSideComponent } from './attachment-server-side/attachment-server-side.component';
import { ControlsType } from '../../enums';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';



@NgModule({
  declarations: [AttachmentServerSideComponent],
  imports: [
    CommonModule,
    MessagesModule,
    MessageModule,
    TranslateModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        {
          name: ControlsType.attachment,
          component: AttachmentServerSideComponent,
          defaultOptions: {
            templateOptions: {
              attachment: {
                isServerSide: false,
                returnFullResponse: true,
                multiple: false,
                fileSize: 3,
                allowedTypes: [],
                uploadedAttach: of([])
              }
            },
          },
        }
      ]
    })
  ]
})
export class AttachmentModule { }
