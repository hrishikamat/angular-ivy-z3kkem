import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-risk-insights-main',
  templateUrl: './risk-insights-main.component.html',
  styleUrls: ['./risk-insights-main.component.scss']
})
export class RiskInsightsMainComponent implements OnInit, AfterViewInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate( [{
      outlets: {
        leftPanel: ['leni-nudges'],
        mainPanel: ['dashboard-panel']
      }
    }], {
      skipLocationChange: true,
      replaceUrl: false
    });
  }

}
