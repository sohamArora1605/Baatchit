import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import {Router} from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  getUserById(id: string | undefined) {
    throw new Error('Method not implemented.');
  }

  private _keycloak: Keycloak | undefined;

  constructor(
    private router: Router
  ) {
  }

  get keycloak() {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: environment.keycloak.url,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId
      });
    }
    return this._keycloak;
  }

  async init() {
    const authenticated = await this.keycloak.init({
      onLoad: 'login-required',
      // silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
      // checkLoginIframe: false
    });
  }

  async login() {
    await this.keycloak.login();
  }

  get userId(): string {
    return this.keycloak?.tokenParsed?.sub as string;
  }

  get isTokenValid(): boolean {
    return !this.keycloak.isTokenExpired();
  }

  get fullName(): string {
    return this.keycloak.tokenParsed?.['name'] as string;
  }
  getEmail(): string {
  return this.keycloak.tokenParsed?.['email'] as string;
}


  logout() {
    return this.keycloak.logout({redirectUri: environment.frontendserver.url});
  }

  accountManagement() {
    return this.keycloak.accountManagement();
  }
}
