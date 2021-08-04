import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public getAdalConfig(): any {

    return {
    
      authenticationMode: environment.powerbi.authenticationMode,

      authorityUrl: environment.powerbi.authorityUri,
    
      scope: environment.powerbi.scope,

      tenant: environment.powerbi.tenantId,
    
      workspaceId: environment.powerbi.workspaceId,
      
      clientId: environment.powerbi.clientId,
        
      clientSecret: environment.powerbi.clientSecret,
      
      reportId: environment.powerbi.reportId,
      
      apiUrl: environment.powerbi.apiUrl,

    
      //should this be localhost:4200?    is this even needed?
      redirectUri: window.location.origin + '/',
    
    
      //likely not needed as the app will alway be logged in...
      // postLogoutRedirectUri: window.location.origin + '/'
    
            };
    
        }
}
