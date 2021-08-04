/// <reference path="../../../../node_modules/@types/adal/index.d.ts" />
import adal from "adal-angular"
import "adal-ts";
import { ConfigService } from "..//config/config.service";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

// import  'expose-loader?AuthenticationContext!../../adal-ts';
import { AuthenticationContext } from "adal-node";
import { HttpClient } from "@angular/common/http";

let authorityUrl = environment.powerbi.authorityUri;
authorityUrl = authorityUrl.replace("common", environment.powerbi.tenantId);
let createAuthContextFn: adal.AuthenticationContextStatic =  AuthenticationContext;
let config: adal.Config = {  clientId : environment.powerbi.clientId };
let context = new createAuthContextFn(authorityUrl);

@Injectable({
  providedIn: "root",
})
export class AdalService {

  private context: adal.AuthenticationContext;

  constructor(private configService: ConfigService, private httpClient: HttpClient) {
    this.context = new createAuthContextFn(configService.getAdalConfig().authorityUrl.replace("common",environment.powerbi.tenantId));
  }

  login() {
    this.context.getAccessToken();
  }

  logout() {
    this.context.logOut();
  }

  handleCallback() {
    // auh;
  }

  public getUserInfo() {
    return this.configService.getAdalConfig().clientId;
  }

  public async getAccessToken() {
    return await new Promise((resolve, reject) => {
      this.context.acquireTokenWithClientCredentials(
      this.configService.getAdalConfig().scope,
      this.configService.getAdalConfig().clientId,
      this.configService.getAdalConfig().clientSecret,
      (err, tokenResponse) => {
        if (err) {
          reject(tokenResponse == null ? err : tokenResponse);
        }
        resolve(tokenResponse);
      })
    }    
    );
  }

  public isAuthenticated() {
    return this.getUserInfo() && this.getAccessToken();
  }
}
