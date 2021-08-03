import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescore-leadgenerator-panel',
  templateUrl: './prescore-leadgenerator-panel.component.html',
  styleUrls: ['./prescore-leadgenerator-panel.component.scss']
})
export class PreScoreLeadGenerationPanelComponent implements OnInit {

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
        mainPanel: ['lead-generation'] 
      }
    }], {
      skipLocationChange: true,
      replaceUrl: false
    });
  }
  
  ngOnInit(): void {
  }

}
