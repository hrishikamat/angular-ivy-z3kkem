import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdalService } from '../../services/Adal/adal.service';
@Component({
  selector: 'app-oauth-call-back',
  templateUrl: './oauth-call-back.component.html',
  styleUrls: ['./oauth-call-back.component.scss']
})
export class OAuthCallBackComponent implements OnInit {

  constructor(
    private router: Router, 
    private adalService: AdalService
  ) {

   }

   // i don't believe i need this
  ngOnInit(): void {
    if(!this.adalService.getUserInfo()) {
      this.router.navigate( [
       'app-login'
      ], {
        skipLocationChange: true,
        replaceUrl: false
      });
    }
    else {
      this.router.navigate( [{
        outlets: {
          leftPanel: ['leni-nudges'],
          mainPanel: ['dashboard-panel']
        }
      }
      ], {
        skipLocationChange: true,
        replaceUrl: false
      });
    }
  }

}
