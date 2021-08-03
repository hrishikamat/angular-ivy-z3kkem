import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor() {}
  
  onSubmit(): void {
    console.warn('You have been logged out', this.loggedIn.valueOf)
      
  }
  loggedIn=true;
  ngOnInit(): void {}
}
