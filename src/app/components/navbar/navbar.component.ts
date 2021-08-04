import { Component, OnInit } from '@angular/core';
import { RiskInsightsLoginService } from "../../services/risk-insights/risk-insights-login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ RiskInsightsLoginService ]
})
export class NavbarComponent implements OnInit {
  constructor( private loginService: RiskInsightsLoginService, private router:Router ) {}

  loggedIn: boolean = true;
  userName: string;
  linksEnabled: boolean = false;
  lastVisit: boolean = true;

  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe( (result) => {
      console.log(`Navbar login check: ${result}`);
      this.loggedIn = result;
    });
  }

  goHome(): void {
    let pageToVisit: string = (this.lastVisit) ? 'navbar-workaround' : 'risk-management';
    this.lastVisit = !this.lastVisit;

    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([ pageToVisit ],{
      skipLocationChange: true,
      replaceUrl: false,
      relativeTo: null
    });
  }
}
