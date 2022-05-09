import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-attachment-viewer',
  templateUrl: './attachment-viewer.component.html',
  styleUrls: ['./attachment-viewer.component.scss']
})
export class AttachmentViewerComponent implements OnInit {

  @Input() attachment: any

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  downLoadContent(content) {
    const Header = {
      responseType: 'blob',
      params: {
        h: 400,
        w: 400,
        mode: "pad"
      }
    };
    this.httpService
      .get(environment.API.Files + '/' + content.locationUrl, Header)
      .pipe(take(1))
      .subscribe(
        (res) => {
          let reader = new FileReader();
          reader.addEventListener(
            'load',
            () => {
              let element = document.createElement('a');
              element.setAttribute('href', <string>reader.result)
              element.setAttribute('download', content.originalName);
              element.style.display = 'none';
              document.body.appendChild(element);
              element.click();
              document.body.removeChild(element);
            },
            false
          );
          reader.readAsDataURL(res)
        }
      );
  }
}
