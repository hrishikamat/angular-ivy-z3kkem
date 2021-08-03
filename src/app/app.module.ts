import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { GaugesModule } from 'ng-canvas-gauges';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { DashboardPanelComponent } from './components/dashboard-panel/dashboard-panel.component';
import { DiscoverLeadsComponent } from './components/discover-leads/discover-leads.component';

import { GrowthOpportunityComponent } from './components/growth-opportunity/growth-opportunity.component';
import { GrowthOpportunityPanelComponent } from './components/growth-opportunity-panel/growth-opportunity-panel.component';

import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { HomeComponent } from './pages/home/home.component';

import { LeadGenerationComponent } from './components/lead-generation/lead-generation.component';

import { LeniFrameComponent } from './components/leni-frame/leni-frame.component';
import { LeniNudgePanelComponent } from './components/leni-nudge-panel/leni-nudge-panel.component';
import { LeniNudgeViewComponent } from './components/leni-nudge-view/leni-nudge-view.component';
import { LeniSearchComponent } from './components/leni-search/leni-search.component';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LogTesterComponent } from './components/log-tester/log-tester.component';

import { MarketGeographyComponent } from './components/market-geography/market-geography.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { PortfolioAnalysisComponent } from './pages/portfolio-analysis/portfolio-analysis.component';
import { PowerBiComponent } from './components/power-bi/power-bi.component';
import { PreScoreLeadGenerationPanelComponent } from './components/prescore-leadgenerator-panel/prescore-leadgenerator-panel.component';

import { RiskDetailBusinessComponent } from './components/risk-detail-business/risk-detail-business.component';
import { RiskDetailLocationComponent } from './components/risk-detail-location/risk-detail-location.component';
import { RiskDetailPropertyComponent } from './components/risk-detail-property/risk-detail-property.component';
import { RiskDetailResultsComponent } from './components/risk-detail-results/risk-detail-results.component';
import { RiskDetailSocialComponent } from './components/risk-detail-social/risk-detail-social.component';
import { RiskDetailWeatherComponent } from './components/risk-detail-weather/risk-detail-weather.component';
import { RiskInsightsMainComponent } from './pages/risk-insights-main/risk-insights-main.component';
import { RiskScoreResultsComponent } from './components/risk-score-results/risk-score-results.component';


import { LogService } from './services/log/log.service';
import { LogPublishersService } from './services/LogPublisher/log-publishers.service';
import { PowerBIService } from './services/powerbi/powerbi.service';
import { RiskInsightsLoginService } from "./services/risk-insights/risk-insights-login.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardPanelComponent,
    DiscoverLeadsComponent,
    GrowthOpportunityComponent,
    GrowthOpportunityPanelComponent,
    HamburgerMenuComponent,
    HomeComponent,
    LeadGenerationComponent,
    LeniFrameComponent,
    LeniNudgePanelComponent,
    LeniNudgeViewComponent,
    LeniSearchComponent,
    LoginComponent,
    LogoutComponent,
    LogTesterComponent,
    MarketGeographyComponent,
    NavbarComponent,
    PortfolioAnalysisComponent,
    PowerBiComponent,
    PreScoreLeadGenerationPanelComponent,
    RiskDetailBusinessComponent,
    RiskDetailLocationComponent,
    RiskDetailPropertyComponent,
    RiskDetailResultsComponent,
    RiskDetailSocialComponent,
    RiskDetailWeatherComponent,
    RiskInsightsMainComponent,
    RiskScoreResultsComponent,
    PreScoreLeadGenerationPanelComponent,
    LeadGenerationComponent,
    DiscoverLeadsComponent    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GaugesModule,
    HttpClientModule,
    NgbModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    HttpClient,
    LogPublishersService,
    LogService,
    PowerBIService,
    RiskInsightsLoginService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
