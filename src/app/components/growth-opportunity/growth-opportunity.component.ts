import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-growth-opportunity',
  templateUrl: './growth-opportunity.component.html',
  styleUrls: ['./growth-opportunity.component.scss'],
  
})
export class GrowthOpportunityComponent implements OnInit {

  constructor(private router: Router) { }

  markets: string[] = [];
  countries: string[] = [];
  regions: string[] = [];
  statesByRegion: Map<string, string[]>;
  states: string[] = [];
  cities: Map<string, string[]> = new Map(); // K = state, V = cities in state

  selectedMarketFilters: string[] = [];
  selectedCountries: string[] = [];
  selectedRegions: string[] = [];
  selectedStates: string[] = [];



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

  displayVisual(): void {
    this.router.navigate( [{
      outlets: {
        leftPanel: ['growth-opportunity-panel'], // needs corrections supposed to be collapsed
        mainPanel: ['power-bi']
      }
    }], {
      skipLocationChange: true,
      replaceUrl: false
    });


  }

  
  submitFieldData(): void {
    // this.processSelectedRegion();
    // this.processSelectedState();
    // this.processSelectedCity();
    this.displayVisual(); 
  }

  ngOnInit(): void {
  }

}
