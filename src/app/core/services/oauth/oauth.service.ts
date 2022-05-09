import {Injectable} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  private oAuthService: any;
  CONFIG_OAUTH: any;

  constructor(
    private oauthService: OAuthService
  ) {
  }

  setConfig(authConfig) {
    this.CONFIG_OAUTH = authConfig;
    this.oauthService.tokenEndpoint = authConfig.oauthBaseURL + authConfig.login;
    this.oauthService.userinfoEndpoint = authConfig.oauthBaseURL + authConfig.userinfoEndpoint;
    this.oauthService.requireHttps = false;
    this.oauthService.clientId = authConfig.clientId;
    this.oauthService.scope = authConfig.scope;
    this.oauthService.setStorage(localStorage);
    this.oauthService.dummyClientSecret = authConfig.dummyClientSecret;
  }

  fetchToken(userCredential) {
    return this.oauthService.fetchTokenUsingPasswordFlow(userCredential.username, userCredential.password).then(
      (resp) => {
        // Loading data about the user
        // return this.oauthService.loadUserProfile();
        this.oauthService.setupAutomaticSilentRefresh();
      })
  }

  // refreshToken(): Promise<any> {
  //   return this.oauthService.refreshToken();
  // }

  autoRefresh() {
    this.oauthService.setupAutomaticSilentRefresh();
  }

  validateToken() {
    return this.oauthService.hasValidAccessToken();
  }

  logout() {
    this.oauthService.logOut();
  }

}
