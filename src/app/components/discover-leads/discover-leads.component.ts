import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover-leads',
  templateUrl: './discover-leads.component.html',
  styleUrls: ['./discover-leads.component.scss']
})
export class DiscoverLeadsComponent implements OnInit {

  constructor(private router:Router) { }
  isShow = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  backToMain(): void {
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
  collapsePanel():void {
    //TODO Collapse panel and reverse chevron orientation
  }

  columnDefs = [
    { 
      headerName: 'Insured Name',
      field: 'Insured',
      cellRenderer:function(params){
         return '<a href="" onclick = "return false;">' + params.value + '</a>';         
      }
    },
    { 
      headerName: 'City',
      field: 'City'
    },
    { 
      headerName: 'State',
      field: 'State'
    }
  ];

  rowData = [
    { Insured: 'Titan Cold Storage Inc', City: 'Manhattan Beach', State: 'California' },
    { Insured: 'Mims Warehouse Solutions', City: 'Houston', State: 'Texas' },
    { Insured: 'Lineage Logistics', City: 'Santa Maria', State: 'California' }
  ];

  ngOnInit(): void {
  }

  onViewCellClicked(event: any)
  {
    this.isShow = !this.isShow;
    return false;
  }

}
