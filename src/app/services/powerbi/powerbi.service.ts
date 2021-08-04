import * as models from 'powerbi-models';
import { Injectable } from '@angular/core';
import { states } from '../../../assets/data/states';
import longStates from '../../../assets/data/longStates';
import { cityState } from '../../../assets/data/city-state';
import { FormBuilder } from '@angular/forms';
import { stateRegion } from '../../../assets/data/state-region';

// import
@Injectable({
  providedIn: 'root',
})
export class PowerBIService {
  private markets: string[] = [];
  private countries: string[] = [];
  private regions: string[] = [];
  private statesByRegion: Map<string, string[]> = new Map();
  private states: string[] = states;
  private cities: Map<string, string[]> = new Map();
  private linesOfBusiness: string[] = [];
  private citiesByState: string[] = [];

  private selectedMarketFilters: string[] = [];
  private selectedCities: string[] = [];
  private selectedCountries: string[] = [];
  private selectedRegions: string[] = [];
  private selectedStates: string[] = [];
  private selectedLongStates: string[] = [];
  private selectedLinesOfBusiness: string[] = [];

  constructor() {
    for (const entry of cityState) {
      if (this.cities.has(entry.state)) {
        const temp = [...this.cities.get(entry.state)];

        temp.push(entry.city);
        this.cities.set(entry.state, temp);
      } else {
        this.cities.set(entry.state, [entry.city]);
      }
    }

    for (const entry of stateRegion) {
      this.statesByRegion.set(entry.region, [...entry.states]);
      this.regions.push(entry.region);
    }
  }

  // TODO: create factory methods to return these with values passed in as params.

  private i9x9StateFilter = {
    $schema: 'http://powerbi.com/product/schema#basic',
    target: {
      table: 'CP_GN',
      column: 'State',
    },
    operator: 'In',
    values: this.selectedStates,
    filterType: models.FilterType.Basic,
    requireSingleSelection: true,
  };

  private i9x9RegionFilter = {
    $schema: 'http://powerbi.com/product/schema#basic',
    target: {
      table: 'CP_GN',
      column: 'Region',
    },
    operator: 'In',
    values: this.selectedRegions,
    filterType: models.FilterType.Basic,
    requireSingleSelection: true,
  };

  private i9x9CityFilter = {
    $schema: 'http://powerbi.com/product/schema#basic',
    target: {
      table: 'CP_GN',
      column: 'Portfolio City',
    },
    operator: 'In',
    values: this.selectedCities,
    filterType: models.FilterType.Basic,
    requireSingleSelection: true,
  };

  private i9x9LinesOfBusinessFilter = {
    $schema: 'http://powerbi.com/product/schema#basic',
    target: {
      table: 'CP_GN',
      column: 'LOB', // may be able to use a col from LOB table...
    },
    operator: 'In',
    values: this.selectedLinesOfBusiness, // needs changed
    filterType: models.FilterType.Basic,
    requireSingleSelection: true,
  };

  addCityToFilteredCities(selectedCity: string): void {
    this.selectedCities.push(selectedCity);
  }
  addStateToFilteredStates(selectedState: string): void {
    this.selectedStates.push(selectedState);
    this.selectedLongStates.push(this.getStateNameFromAbbrev(selectedState));
  }

  addRegionToFilteredRegions(selectedRegion: string): void {
    this.selectedRegions.push(selectedRegion);
  }

  removeCityFromFiltersList(selectedCity: string): void {
    this.selectedCities = this.selectedCities.filter(
      (city) => city !== selectedCity
    );
  }
  removeStateFromFiltersList(selectedState: string): void {
    this.selectedStates = this.selectedStates.filter(
      (state) => state !== this.getAbbrevFromStateName(selectedState)
    );
    this.selectedLongStates = this.selectedLongStates.filter(
      (state) => state !== selectedState
    );
  }

  getRegions(): string[] {
    return this.regions;
  }

  getStatesByRegion(): Map<string, string[]> {
    return this.statesByRegion;
  }
  getSelectedRegions(): string[] {
    return this.selectedRegions; // todo return selected regions
  }
  getSelectedCities(): string[] {
    return this.selectedCities; // todo complete returning selected cities
  }
  getCities(): Map<string, string[]> {
    return this.cities;
  }
  getCitiesbyState(state: string): string[] {
    return cityState
      .filter((item) => item.state === state)
      .map((item) => item.city);
  }
  getStates(): string[] {
    return this.states;
  }

  getSelectedStates(): string[] {
    return this.selectedStates;
  }

  getSelectedLongStates(): string[] {
    return this.selectedLongStates;
  }

  getStateNameFromAbbrev(stateAbbreviation: string): string {
    const keys: string[] = Object.keys(longStates);
    if (keys.indexOf(stateAbbreviation) === -1) {
      return;
    }

    return longStates[stateAbbreviation];
  }

  getAbbrevFromStateName(stateName: string): string {
    return Object.keys(longStates).find((key) => longStates[key] === stateName);
  }
}
