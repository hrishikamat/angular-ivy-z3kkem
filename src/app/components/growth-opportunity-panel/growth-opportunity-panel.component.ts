import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-growth-opportunity-panel',
  templateUrl: './growth-opportunity-panel.component.html',
  styleUrls: ['./growth-opportunity-panel.component.scss']
})
export class GrowthOpportunityPanelComponent implements OnInit {

  constructor(private router:Router) { }

  backToMain(): void {
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
  collapsePanel():void {
    //TODO Collapse panel and reverse chevron orientation
  }

  lossPerformance():void { //TODO Replace with correct nav desitnations
    this.router.navigate( [{
      outlets: {
        leftPanel: ['growth-opportunity-panel'],
        mainPanel: ['dashboard-panel'] //going to be changed anyway
      }
    }], {
      skipLocationChange: true,
      replaceUrl: false
    });
  }
  growthPerfomance():void{
    this.router.navigate( [{
      outlets: {
        leftPanel: ['growth-opportunity-panel'],
        mainPanel: ['growth-opportunity']
      }
    }], {
      skipLocationChange: true,
      replaceUrl: false
    });

  }

  riskPerformance():void { //TODO Replace with correct nav destinations
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
  ngOnInit(): void {
  }

}
