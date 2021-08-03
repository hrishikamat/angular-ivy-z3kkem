import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.scss']
})
export class PowerBiComponent implements OnInit  {

  name = 'Power-BI-Visual';
  url = 'https://app.powerbi.com/reportEmbed?reportId=7c1774c7-598c-4cb1-ae44-d0dc1eac0e28&autoAuth=true&ctid=02aa9fc1-18bc-4798-a020-e01c854dd434&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&filterPaneEnabled=false&navContentPaneEnabled=false';
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer, private router:Router) { }
 
 
  backToGrowthOp(): void {
    this.router.navigate( [{
      outlets: {
        leftPanel: ['growth-opportunity-panel'],
        mainPanel: ['growth-opportunity']
      }
    }], {
      skipLocationChange: true,
      replaceUrl: false
    });
  }


  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }



}
//
