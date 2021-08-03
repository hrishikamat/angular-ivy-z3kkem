import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LogPublisher, LogConsole, LogLocalStorage, LogWebApi, LogPublisherConfig } from '../log/log-publisher';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
const PUBLISHERS_FILE = "src/app/assets/data/log-publishers.json";
@Injectable({
  providedIn: 'root'
})
export class LogPublishersService {

  //replace http with Axios
  constructor(private http: HttpClient) { 
    //build the publisher array
    this.buildPublishers();
  }
  publishers: LogPublisher[] = [];
  //modify for axios
  //currently broken
  // getLoggers(): Observable<LogPublisherConfig[]> {
  //   return this.http.get(PUBLISHERS_FILE)
  //   .pipe( 
  //     map( res => res ) );
      
   
  // }

  //    //just in case
  //    private handleErrors(error: any): Observable<any> {
  //     let errors: string[] = [];
  //     let msg: string = "";
      
  //     msg = "Status: " + error.status;
  //     msg += " - Status Text: " + error.statusText;
  //     if (error.json()) {
  //         msg += " - Exception Message: " + error.json().exceptionMessage;
  //     }
  //     errors.push(msg);
      
  //     console.error('An error occurred', errors);
  //     return Observable.throw(errors);
  // }

  buildPublishers(): void {

    let logPub: LogPublisher;

    // this.getLoggers().subscribe( response => {
    //   for (let pub of response.filter(p => p.isActive)) {
    //     switch (pub.loggerName.toLowerCase()) {
    //       case "console":
    //         logPub = new LogConsole();
    //         break;
    //       case "localstorage":
    //         logPub = new LogLocalStorage();
    //         break;
    //       case "webapi":
    //         logPub = new LogWebApi(this.http);
    //         break;
    //     }
    //     logPub.location = pub.loggerLocation;

    //     this.publishers.push(logPub);
        
    //   }
    // });

    this.publishers.push(new LogLocalStorage());
    /*
    this.publishers.push(new LogConsole());
    
    this.publishers.push(new LogWebApi(this.http));
    */
  }
}
