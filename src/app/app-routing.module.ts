import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { RiskInsightsMainComponent } from "./pages/risk-insights-main/risk-insights-main.component";
import { LeniNudgePanelComponent } from "./components/leni-nudge-panel/leni-nudge-panel.component";
import { DashboardPanelComponent } from "./components/dashboard-panel/dashboard-panel.component";
import { LeniNudgeViewComponent } from "./components/leni-nudge-view/leni-nudge-view.component";
import { GrowthOpportunityComponent } from './components/growth-opportunity/growth-opportunity.component';
import { PowerBiComponent } from './components/power-bi/power-bi.component';
import { GrowthOpportunityPanelComponent } from './components/growth-opportunity-panel/growth-opportunity-panel.component';
import { PortfolioAnalysisComponent } from "./pages/portfolio-analysis/portfolio-analysis.component";
import { OAuthCallBackComponent } from './components/oauth-call-back/oauth-call-back.component';
import { AuthenticationGuard as OAuthCallbackHandler } from './modules/authentication.guard';
import {PreScoreLeadGenerationPanelComponent} from './components/prescore-leadgenerator-panel/prescore-leadgenerator-panel.component';
import {LeadGenerationComponent} from './components/lead-generation/lead-generation.component';
import {DiscoverLeadsComponent} from './components/discover-leads/discover-leads.component';

const loggedIn = true; // TODO: Change to a service to check status

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'navbar-workaround', component:  RiskInsightsMainComponent, pathMatch: 'full'}, // for going home in navbar, workaround for now
  { path: 'login', component: LoginComponent },
  { path: 'risk-management', component:  RiskInsightsMainComponent },
  { path: 'portfolio-analysis', component:  PortfolioAnalysisComponent },
  { path: 'leni-nudges', component: LeniNudgePanelComponent, outlet: 'leftPanel' },
  { path: 'dashboard-panel', component: DashboardPanelComponent, outlet: 'mainPanel'},
  { path: 'nudge-view/:id', component: LeniNudgeViewComponent, outlet: 'mainPanel'},
  { path: 'nudge-view', component: LeniNudgeViewComponent, outlet: 'mainPanel'},
  { path: 'growth-opportunity-panel', component: GrowthOpportunityPanelComponent, outlet: 'leftPanel'},
  { path: 'growth-opportunity', component: GrowthOpportunityComponent, outlet: 'mainPanel'},
  { path: 'power-bi', component: PowerBiComponent, outlet: 'mainPanel'},
  { path: 'id_token', component: OAuthCallBackComponent, canActivate: [OAuthCallbackHandler] },

  { path: 'prescore-leadgenerator-panel', component: PreScoreLeadGenerationPanelComponent, outlet: 'leftPanel'},
  { path: 'lead-generation', component: LeadGenerationComponent, outlet: 'mainPanel'},
  { path: 'discover-leads', component:DiscoverLeadsComponent, outlet:'mainPanel'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
