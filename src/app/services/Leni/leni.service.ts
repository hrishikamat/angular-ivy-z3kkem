import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LeniNudge } from "../../models/leni-nudge";
import { environment } from "src/environments/environment";
import * as sampleData from "../../models/nudge-sample.json";

@Injectable({
  providedIn: 'root'
})
export class LeniService {

  constructor(private httpClient:HttpClient) { }

  //------- Login API ----------
  isAuthenticated(): boolean {
    if( environment.leni.token === '') {
      return false;
    }

    return true;
  }

  // BUGBUG: Leni API is not working properly implement later
  authenticate(): void {

    let url = environment.leni.baseUrl + environment.leni.authenticateEndoint;
    let encodedAuthorization = btoa(environment.leni.user + ':' + environment.leni.password);

    let options = {
      headers: {
        Authorization: `Basic ${encodedAuthorization}`,
        "Content-Type": "application/json"
      }
    };

    let request = this.httpClient.get(url, options);

    request.subscribe(
      (response) => {
        console.log("response");
        console.log(response);
      }, (error) => {
        console.log("Error:");
        console.log(error);
    });
  }
  //------- Login API ----------

  //------- Landing Page API ----------
  //------- Landing Page API ----------

  //------- Nudges API ----------
  getNudgesDashboard(): Observable<LeniNudge> {
    return of(null);
  }

  getAllNudges(): Observable<LeniNudge[]> {
    // response.body.data.data_output -> LeniNudge[]
    // TODO: implement actual api
    let mockData = (sampleData.body.data.data_output as unknown as LeniNudge[]);
    return of(mockData);
  }

  nudgesFilter(): Observable<LeniNudge> {
    return of(null);
  }

  nudgeChart(): Observable<LeniNudge> {
    return of(null);
  }
  //------- Nudges API ----------

  //------- Ask Leni API ----------
  //------- Ask Leni API ----------
  
  //------- Feedback API ----------
  //------- Feedback API ----------

  //------- Data Refresh API ----------
  //------- Data Refresh API ----------

}
