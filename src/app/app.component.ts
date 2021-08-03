import { Component, OnInit } from '@angular/core';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { RiskInsightsLoginService } from "./services/risk-insights/risk-insights-login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'RiskInsightsDashboard';
  loggedIn: boolean = true;

  constructor( private loginService: RiskInsightsLoginService ) {}

  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe( (result) => {
      console.log(`app login check: ${result}`);
      this.loggedIn = result;
    });
  }
}
