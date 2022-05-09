import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class AttachmentServerSideService {

  constructor(
    private htpp: HttpService,
  ) { }


  uploadFile(URL: string, file: Blob): Observable<any> {

    const formData = new FormData();
    formData.append('files', file);

    const header = {
      reportProgress: 'true',
      observe: 'events'
    }


    return this.htpp.post(URL, formData);
  }
}
