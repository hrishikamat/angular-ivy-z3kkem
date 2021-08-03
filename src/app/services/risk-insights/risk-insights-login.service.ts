import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiskInsightsLoginService {

  private loggedIn: boolean = true; // should be false by defualt when service is working properly
  private loginSubject: Subject<boolean> = new Subject();

  constructor() { }

  isLoggedIn(): Subject<boolean> {
    this.updateObservable();
    return this.loginSubject;
  }

  // BUGBUG: not updating properly
  private updateObservable( ) {
    console.log(`Logged in service update: ${this.loggedIn}`);
    this.loginSubject.next( this.loggedIn );
  }

  // TODO: Implement call to server
  // Returns true if login successful, false otherwise
  login(username, password): boolean {
    this.loggedIn = true;
    this.updateObservable();
    return true;
  }

  // TODO: remove session token and expire it on server
  logout() {
    this.loggedIn = false;
    this.updateObservable();
  }
}
