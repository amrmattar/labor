export interface AttachmentContainerInterface {
  file?: Blob;
  id?: string;
  type?: string;
  size?: number;
  pathView?: any;
  errorMessages?: string[];
  backendResponse?: any
}

