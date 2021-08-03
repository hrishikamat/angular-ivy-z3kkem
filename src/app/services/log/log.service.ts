import { Injectable } from '@angular/core';
import { LogPublishersService } from '../LogPublisher/log-publishers.service';
import { LogPublisher } from './log-publisher';


export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6
}
@Injectable({
  providedIn: 'root'
})

/* these are all valid calls for the log service

this.logger.log("Test 2 Parameters", "Paul", "Smith");

this.logger.debug("Test Mixed Parameters", true, false, "Paul", "Smith");

let values = ["1", "Paul", "Smith"];
this.logger.warn("Test String and Array", "Some log entry", values);

*/

export class LogService {

  publishers: LogPublisher[];
  level: LogLevel = LogLevel.All;
  logWithDate: boolean = true;

  private writeToLog(msg: string, level: LogLevel, params: any[]) {
    if (this.shouldLog(level)) {
        let entry: LogEntry = new LogEntry();
        entry.message = msg;
        entry.level = level;
        entry.extraInfo = params;
        entry.logWithDate = this.logWithDate;
        
        for (let logger of this.publishers) {
          logger.log(entry).subscribe(response => console.log(response));
        }
    }
}


private shouldLog(level: LogLevel): boolean {
  let ret: boolean = false;
  if ((level >= this.level && level !== LogLevel.Off) || this.level === LogLevel.All) {
      ret = true;
  }
  return ret;
}



  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
}

info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info, optionalParams);
}

warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warn, optionalParams);
}

error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error, optionalParams);
}

fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams);
}

log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.All, optionalParams);
}

  constructor(private publishersService: LogPublishersService) {
    this.publishers= this.publishersService.publishers;
   }

}
export class LogEntry {
 
  entryDate: Date = new Date();
  message: string = "";
  level: LogLevel = LogLevel.Debug;
  extraInfo: any[] = [];
  logWithDate: boolean = true;
  
  buildLogString(): string {
      let ret: string = "";
      
      if (this.logWithDate) {
          ret = new Date() + " - ";
      }
      
      ret += "Type: " + LogLevel[this.level];
      ret += " - Message: " + this.message;
      if (this.extraInfo.length) {
          ret += " - Extra Info: " + this.formatParams(this.extraInfo);
      }
      
      return ret;
  }
  
  private formatParams(params: any[]): string {
      let ret: string = params.join(",");
      
      // Is there at least one object in the array?
      if (params.some(p => typeof p == "object")) {
          ret = "";
          
          //build the string in csv format
          for (let item of params) {
              ret += JSON.stringify(item) + ",";
          }
      }
      
      return ret;
  }
}
