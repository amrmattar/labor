import { Observable } from 'rxjs';

export interface AttachmentControlInterface {
  isServerSide: boolean;
  multiple?: boolean;
  maxWidth?: string;
  maxHeight?: string;
  returnFullResponse?: boolean;
  fileSize?: number;
  allowedTypes?: string[];
  previewWidth?: string;
  previewHeight?: string;
  uploadedAttach?: Observable<any>;
}
