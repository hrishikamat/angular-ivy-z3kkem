import { Component, OnInit } from '@angular/core';
import { RiskInsightsLoginService } from "../../services/risk-insights/risk-insights-login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ RiskInsightsLoginService ]
})
export class NavbarComponent implements OnInit {
  constructor( private loginService: RiskInsightsLoginService ) {}

  loggedIn: boolean = true;
  userName: string;
  linksEnabled: boolean = false;

  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe( (result) => {
      console.log(`Navbar login check: ${result}`);
      this.loggedIn = result;
    });
  }
}
