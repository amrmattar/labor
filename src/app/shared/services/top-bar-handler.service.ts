import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';

export interface ITopBar {
  pageTitle: string;
  breadcrumb: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class TopBarHandlerService {

  routeDate: Subject<ITopBar> = new Subject<ITopBar>();

  constructor() { }
}
