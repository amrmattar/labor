import {Component, OnInit} from '@angular/core';
import {OauthService} from "../../core/services/oauth/oauth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  template: `
    <main>
      <aside>
        <app-side-menu></app-side-menu>
      </aside>
      <section>
        <app-top-bar></app-top-bar>
        <router-outlet></router-outlet>
      </section>
    </main>
    <ui-toaster></ui-toaster>
    <p-confirmDialog [style]="{width: '50vw'}" [baseZIndex]="10000"></p-confirmDialog>
  `,
  styles: ['main {display: flex;}', 'section { width: 100%; padding: 1rem;}']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private oauthService: OauthService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    // this.oauthService.autoRefresh();
    // if (!this.oauthService.validateToken())
    //   this.oauthService.refreshToken();
  }

}
