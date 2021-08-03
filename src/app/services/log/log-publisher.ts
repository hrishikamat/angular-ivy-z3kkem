
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { LogEntry } from 'src/app/services/log/log.service';

export abstract class LogPublisher {
    location: string;
    abstract log(record: LogEntry): Observable<Object>;
    abstract clear(): Observable<boolean>;
}
export class LogConsole extends LogPublisher {
    
    log(entry: LogEntry): Observable<boolean> {
        // Log to console
        console.log(entry.buildLogString());
        return observableOf(true); 
    }
    
    clear(): Observable<boolean> {
        console.clear();
        return observableOf(true);
    }
}
export class LogLocalStorage extends LogPublisher {
    constructor() {
        super();
        this.location="logging";
    }

    log(entry: LogEntry): Observable<boolean> {
        let ret: boolean = false;
        let values: LogEntry[];

        try{
            
            //pull up old log from local storage
            values = JSON.parse(localStorage.getItem(this.location)) || [];
            
            //add new entry to the log
            values.push(entry);
            
            //store appended log into local log file
            localStorage.setItem(this.location, JSON.stringify(values));
            
            //return true for success
            ret=true;
        } catch(ex) {
            //write error to console
            console.log(ex);
        }
        return observableOf(ret);
    }

    //clear all log entries from local storage
    clear(): Observable<boolean> {
        localStorage.removeItem(this.location);
        return observableOf(true);
    }
}

export class LogWebApi extends LogPublisher {
   
    log(entry: LogEntry): Observable<Object> {

        // replace all of this with axios method calls
        // let headers = new Headers({  });
        // let options = new Request({ headers: headers });
        
        return this.http.post(
            this.location, 
            entry, 
            {headers: new HttpHeaders( 
                { 
                    'Content-Type': 'application/json',
                    //?? seems like more should be here
                    })
                })
                .pipe(
                    map( res => res )
                );
    }
   
    clear(): Observable<boolean> {
        // Changes out to Call Web API to clear all values
        return observableOf(true);
    }

    //is this even needed??
    // private handleErrors(error: any): Observable<any> {
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
    constructor (private http: HttpClient) { //change out with Axios???
        //invoke super and set location
    super();
    this.location = "/api/log";
    }
}

export class LogPublisherConfig {
    loggerName: string;
    loggerLocation: string;
    isActive: boolean;
}

