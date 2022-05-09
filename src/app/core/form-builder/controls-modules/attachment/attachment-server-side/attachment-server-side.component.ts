import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { LocalizationService } from 'src/app/core/services';
import { AttachmentContainerInterface } from '../attachment-container.interface';
import { AttachmentServerSideService } from '../attachment-server-side.service';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment-server-side.component.html',
  styleUrls: ['./attachment-server-side.component.scss'],
})
export class AttachmentServerSideComponent extends FieldType implements OnInit {
  @ViewChild('attachInput') attachInputVariable: ElementRef;

  imagesExtensions: string[] = [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/bmp',
    'image/tiff',
    'image/svg',
  ];

  attachments: AttachmentContainerInterface[] = [];
  idsAttach: string[] = [];

  selectedFile$ = new Subject<AttachmentContainerInterface[]>();
  imagefile: string;

  get visibilityUploadControl(): boolean {
    const isMulti = this.to?.attachment?.multiple;
    const hasFiles = this.attachments.length;

    return isMulti || (!isMulti && !hasFiles);
  }

  get fieldFormControl() {
    return this.form.get(`${this.field.key}`);
  }

  constructor(
    private attachmentService: AttachmentServerSideService,
    private transService: LocalizationService
  ) {
    super();
  }

  ngOnInit() {
    this.watchUpdatedAttachments();
    this.updateFormValueWithUpload();

    this.to.attachment?.uploadedAttach.subscribe((res) => {
      this.attachments = res.map((val) => {
        const idAttach = this.getIDFromUploadedAttach(val);
        return { pathView: val, id: idAttach };
      });
      this.selectedFile$.next(this.attachments);
    });
  }

  checkType(type) {
    let notTmage: boolean = false;
    switch (type) {
      case 'application/pdf':
        notTmage = true;
        this.imagefile = 'assets/images/types/pdf.svg';
        break;
      case 'application/msword':
        notTmage = true;
        this.imagefile = 'assets/images/types/doc-file.svg';
        break;
      case 'application/vnd.ms-excel':
        notTmage = true;
        this.imagefile = 'assets/images/types/csv-file-format-extension.svg';
        break;
      default:
        // code block
        notTmage = false;
    }
    return notTmage;
  }

  downloadFile(file) {
    const name = file.backendResponse ? file.backendResponse.name : 'image';
    const link = document.createElement('a');
    link.href = file.pathView;
    link.download = `${name}`;
    link.click();
  }

  getIDFromUploadedAttach(attach) {
    const breakImgUrl = attach.split('/');
    const imageId = breakImgUrl[breakImgUrl.length - 1];
    return imageId;
  }

  watchUpdatedAttachments() {
    this.fieldFormControl.valueChanges.subscribe((res) => {
      if (!res) this.attachments = [];
    });
  }

  updateFormValueWithUpload() {
    this.selectedFile$.subscribe((files) => {
      const idsFiles = files.map((file) => {
        if (this.to?.attachment.returnFullResponse) return file;

        return file.id !== undefined ? file.id : undefined;
      });
      this.fieldFormControl.setValue(idsFiles);
    });
  }

  newAttach(event) {
    const files: Blob[] = Object.values(event.target?.files);
    this.attachments = files.map((file: Blob) => {
      const item: AttachmentContainerInterface = {
        file,
        type: file.type,
        size: file.size,
      };

      this.readerFile(item);
      return item;
    });
  }

  removeFileUploaded(index) {
    this.attachments.splice(index, 1);
    this.selectedFile$.next(this.attachments);
  }

  private readerFile(objectAttach: AttachmentContainerInterface) {
    const reader = new FileReader();
    reader.readAsDataURL(objectAttach.file);

    reader.onload = () => {
      const isImage: boolean = this.imagesExtensions.some((type) => {
        return type === objectAttach.file.type;
      });

      objectAttach.pathView = reader.result as string;
      objectAttach.errorMessages = [];

      if (this.to?.attachment?.fileSize) this.validateFileSize(objectAttach);

      if (this.to?.attachment?.allowedTypes?.length)
        this.validateFileType(objectAttach);

      if (isImage) this.createImage(reader.result as string, objectAttach);

      if (this.to?.attachment.isServerSide) this.uploadAttachment(objectAttach);
      else this.selectedFile$.next(this.attachments);
    };
  }

  private uploadAttachment(objectAttach: AttachmentContainerInterface) {
    if (!objectAttach.errorMessages.length) {
      this.attachmentService
        .uploadFile('URL', objectAttach.file)
        .subscribe((response) => {
          objectAttach.backendResponse = response.result[0];
          objectAttach.id = response.result[0].id;
          this.selectedFile$.next(this.attachments);
        });
    }
  }

  private createImage(
    file: string,
    objectAttach: AttachmentContainerInterface
  ) {
    const img = new Image();
    const hasWidthAndHeight =
      this.to?.attachment?.maxWidth && this.to?.attachment?.maxHeight;
    img.src = file;

    if (hasWidthAndHeight)
      img.onload = () => {
        const height = img.naturalHeight;
        const width = img.naturalWidth;
        this.validateImageDimensions(width, height, objectAttach);
      };
  }

  private validateFileSize(objectAttach: AttachmentContainerInterface) {
    const attachSizeByMegabyte = this.to?.attachment?.fileSize * 1024 * 1024;
    const isValidSizeForAttachment = objectAttach.size > attachSizeByMegabyte;
    const errorMessage = this.transService.translateIT(
      'ATTACHMENT_CONTROL.ERROR_VALIDATION_SIZE'
    );
    if (isValidSizeForAttachment)
      objectAttach.errorMessages.push(errorMessage + attachSizeByMegabyte);
  }

  private validateFileType(objectAttach: AttachmentContainerInterface) {
    const attachmentHasValidType = !this.to?.attachment?.allowedTypes.some(
      (type) => {
        return objectAttach.type.includes(type);
      }
    );
    const errorMessage = this.transService.translateIT(
      'ATTACHMENT_CONTROL.ERROR_VALIDATION_TYPE'
    );
    if (attachmentHasValidType) objectAttach.errorMessages.push(errorMessage); // use translation
  }

  private validateImageDimensions(
    width: number,
    height: number,
    objectAttach: AttachmentContainerInterface
  ) {
    const ImageHasValidDimensisons =
      width > this.to?.attachment?.maxWidth ||
      height > this.to?.attachment?.maxHeight;
    const errorMessage = this.transService.translateIT(
      'ATTACHMENT_CONTROL.ERROR_VALIDATION_DIMENSIONS'
    );
    if (ImageHasValidDimensisons)
      objectAttach.errorMessages.push(
        errorMessage +
          this.to?.attachment?.maxWidth +
          '/' +
          this.to?.attachment?.maxHeight
      );
  }
}
