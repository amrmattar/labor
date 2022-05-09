import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import { HttpService, StorageService } from './core/services';
import { OauthService } from "./core/services/oauth/oauth.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})

export class AppComponent implements OnInit {

  constructor(
    private primengConfig: PrimeNGConfig,
    private storageService: StorageService,
    private httpService: HttpService,
    private http: HttpClient,
    private oauthService: OauthService
  ) {

    // this.fetchConfig().then(res => {
    //   this.oauthService.setConfig(res['auth']);
    //   this.httpService.baseUrl = res['baseUrl'];
    // });
  }

  // async fetchConfig() {
  //   return await this.http.get('/assets/config/env.json').toPromise();
  // }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    const getLang = this.storageService.getLang();
    document.body.classList.remove('lang-en', 'lang-ar');
    document.body.classList.add(getLang === 'en' ? 'lang-en' : 'lang-ar');
  }

}
