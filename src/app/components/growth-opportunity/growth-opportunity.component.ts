import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PowerBIService } from 'src/app/services/powerbi/powerbi.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { state } from '@angular/animations';

@Component({
  selector: 'app-growth-opportunity',
  templateUrl: './growth-opportunity.component.html',
  styleUrls: ['./growth-opportunity.component.scss'],
})
export class GrowthOpportunityComponent implements OnInit {
  constructor(
    private router: Router,
    private powerBIService: PowerBIService,
    private formBuilder: FormBuilder
  ) {}

  formData: FormGroup;
  markets: string[] = [];
  countries: string[] = [];
  regions: string[] = [];
  statesByRegion: Map<string, string[]>;
  states: string[] = [];
  cities: string[] = []; // K = state, V = cities in state

  selectedMarketFilters: string[] = [];
  selectedCountries: string[] = [];
  selectedRegions: string[] = [];
  selectedStates: string[] = [];
  selectedState: string;
  selectedStatesLong: string[] = [];
  selectedCities: string[] = [];

  backToMain(): void {
    this.router.navigate(
      [
        {
          outlets: {
            leftPanel: ['lenni-nudges'],
            mainPanel: ['dashboard-panel'],
          },
        },
      ],
      {
        skipLocationChange: true,
        replaceUrl: false,
      }
    );
  }

  displayVisual(): void {
    this.router.navigate( [{
      outlets: {
        leftPanel: ['growth-opportunity-panel'], // needs corrections supposed to be collapsed
        mainPanel: ['power-bi']
      }
    }],
    {
      skipLocationChange: true,
      replaceUrl: false,
    }
    );
  }

  submitFieldData(): void {
    this.processSelectedRegion();
    this.processSelectedState();
    this.processSelectedCity();
    this.displayVisual(); 
  }

  processSelectedRegion(): void {
    if(this.powerBIService.getSelectedRegions().indexOf(
      this.formData.controls.region.value
      ) === -1  ) {
    this.powerBIService.addRegionToFilteredRegions(
      this.formData.controls.region.value
    );
  }
  }
  processSelectedCity(): void {
    if(this.powerBIService.getSelectedCities().indexOf(
      this.formData.controls.city.value
      ) === -1  ) {
       this.powerBIService.addCityToFilteredCities(
      this.formData.controls.city.value
    ); 
      }
    
  }

  processSelectedState(): void {
    if(this.powerBIService.getSelectedStates().indexOf(
      this.formData.controls.state.value
      ) === -1  ) {
    this.powerBIService.addStateToFilteredStates(
      this.formData.controls.state.value
    );}
  }
  onStateSelection(): void {
    this.cities = this.powerBIService.getCitiesbyState(
      this.formData.controls.state.value
    );
    this.selectedState = this.powerBIService.getStateNameFromAbbrev(
      this.formData.controls.state.value
    );

    this.processSelectedState();
  }
  onRegionSelection(): void {
    this.processSelectedRegion();
  }

  onCitySelection(): void {
    this.processSelectedCity();
  }

  
  

  ngOnInit(): void {
    this.formData = new FormGroup({
      region: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
    });
    // this.cities = this.powerBIService.getCities();
    this.states = this.powerBIService.getStates();
    this.regions = this.powerBIService.getRegions();
    this.selectedRegions = this.powerBIService.getSelectedRegions();
    this.selectedCities = this.powerBIService.getSelectedCities();
    this.selectedStates = this.powerBIService.getSelectedStates();
    this.selectedStatesLong = this.powerBIService.getSelectedLongStates();
    this.statesByRegion = this.powerBIService.getStatesByRegion();
  }

  removeState(event: Event): void {
    console.log((event.target as HTMLInputElement).textContent);
    this.powerBIService.removeStateFromFiltersList(
      (event.target as HTMLInputElement).textContent
    );
    this.selectedStates = this.powerBIService.getSelectedStates();
    this.selectedStatesLong = this.powerBIService.getSelectedLongStates();
  }
  removeCity(event: Event): void {
    console.log((event.target as HTMLInputElement).textContent);
    this.powerBIService.removeCityFromFiltersList(
      (event.target as HTMLInputElement).textContent
    );
    this.selectedCities = this.powerBIService.getSelectedCities();
  }
  // getRegionFilters(): string[]{

  // }
}
