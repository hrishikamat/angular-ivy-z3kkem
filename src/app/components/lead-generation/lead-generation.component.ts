import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead-generation',
  templateUrl: './lead-generation.component.html',
  styleUrls: ['./lead-generation.component.scss']
})
export class LeadGenerationComponent implements OnInit {

  constructor(private router:Router) { }

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
  collapsePanel():void {
    //TODO Collapse panel and reverse chevron orientation
  }

  leadgeneration():void {
    this.router.navigate( [{
      outlets: {
        leftPanel: ['prescore-leadgenerator-panel'],
        mainPanel: ['discover-leads'] 
      }
    }], {
      skipLocationChange: true,
      replaceUrl: false
    });
  }
  
  ngOnInit(): void {
  }

}
