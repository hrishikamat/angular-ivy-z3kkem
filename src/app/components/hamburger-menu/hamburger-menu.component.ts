import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

  portfolioAnalysis = [{ outlets: { primary: 'portfolio-analysis', leftPanel: null, mainPanel: null} }];

  navList = [
    { title: "Portfolio Analysis", link: this.portfolioAnalysis },
    { title: "Underwriting Strategy Reactor", link: '' },
    { title: "Pre-Score Lead Generator", link: '' }
  ];

  constructor( private router: Router) { }

  ngOnInit(): void {
    
  }

  hamburgerPress() {
    console.log('Pressed?');
  }
}
