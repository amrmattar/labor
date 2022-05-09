import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { MenuItem } from 'primeng/api';
import {
  JwtDecodeService,
  LocalizationService, StorageService,
} from 'src/app/core/services';
import { OauthService } from 'src/app/core/services/oauth/oauth.service';
import { ITopBar, TopBarHandlerService } from 'src/app/shared/services/top-bar-handler.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {
  loggedUserInfo: { name: string; email: string } = { name: '', email: '' };
  pageTitle: string;
  items: MenuItem[];
  home: MenuItem = { label: 'Homee', routerLink: 'products' };
  currentRoute: string;
  elem: any;
  fullScreen: boolean;

  constructor(
    private router: Router,
    private storage: StorageService,
    private oauthService: OauthService,
    private tokenDecode: JwtDecodeService,
    private topBarService: TopBarHandlerService,
    public translationServices: LocalizationService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.detectTopBar();
    this.elem = document.documentElement;
    // this.getLoggedUserInfo();
  }

  openFullscreen() {
    if (!this.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
      this.fullScreen = !this.fullScreen
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
      this.fullScreen = !this.fullScreen;
    }
  }

  // getLoggedUserInfo() {
  //   const token = this.storage.getStringItem('access_token');
  //   const UserInfo = this.tokenDecode.decodeToken(token);
  //   this.loggedUserInfo.name =
  //     UserInfo['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
  //   this.loggedUserInfo.email =
  //     UserInfo[
  //       'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
  //     ];
  // }

  backBtn() {
    this.router.navigate(['products']);
  }

  changeLang() {
    this.translationServices.toggleLanguage();
  }

  detectTopBar(): void {
    this.topBarService.routeDate.subscribe((res: ITopBar) => {
      console.log(res);
      this.pageTitle = res.pageTitle;
      this.items = res.breadcrumb;
    });
  }

  logout() {
    this.storage.clearStorage().subscribe(() => {
      this.oauthService.logout();
      this.router.navigate(['login']);
    });
  }
}
