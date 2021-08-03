import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.scss']
})
export class DashboardPanelComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  growthVisual():void {
    this.router.navigate( [{
      outlets: {
        leftPanel: ['growth-opportunity-panel'],
        mainPanel: ['dashboard-panel']
      }
    }], {
      skipLocationChange: true,
      replaceUrl: false
    });
  }
}
