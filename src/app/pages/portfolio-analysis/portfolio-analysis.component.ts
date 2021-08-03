import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-analysis',
  templateUrl: './portfolio-analysis.component.html',
  styleUrls: ['./portfolio-analysis.component.scss']
})
export class PortfolioAnalysisComponent implements OnInit, AfterViewInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    this.router.navigate( [{
      outlets: {
        leftPanel: ['growth-opportunity-panel'],
        mainPanel: ['dashboard-panel'] // replace with correct main panel when implemented
      }
    }], {
      skipLocationChange: true,
      replaceUrl: false
    });
  }
}
