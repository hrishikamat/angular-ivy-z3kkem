import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { LeniService } from "../../services/Leni/leni.service";
import { LeniNudge } from "../../models/leni-nudge";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leni-nudge-panel',
  templateUrl: './leni-nudge-panel.component.html',
  styleUrls: ['./leni-nudge-panel.component.scss'],
  providers: [ LeniService ]
})
export class LeniNudgePanelComponent implements OnInit, AfterViewInit {

  nudges: LeniNudge[];
  
  @Input() page: number = 1;
  @Input() pageSize: number = 5;

  @ViewChild('leniNudgePanelDiv') leniNudgePanelDiv: ElementRef;

  constructor( private leniService: LeniService, private router: Router ) { }
  
  ngOnInit(): void {
    this.getNudges();
  }

  ngAfterViewInit(): void {
    let hieghtObservable: Observable<DOMRect> = new Observable( (observer) => {
      let interval = setInterval( () => {
        observer.next(this.leniNudgePanelDiv.nativeElement.getBoundingClientRect())
      }, 1000);

      if ( this.pageSize == 1 ) {
        observer.complete();
        clearInterval( interval );
      }
    });

    hieghtObservable.subscribe( (box: DOMRect) => {
      if( this.pageSize > 1 && box.bottom > window.innerHeight) {
        --this.pageSize;
      }
    });
  }

  getNudges(): void {
    this.leniService.getAllNudges().subscribe( (response) => {
      this.nudges = response;
    });
  }

  routeToView(nudge: LeniNudge): void {
    this.router.onSameUrlNavigation = "reload";
    
    this.router.navigate( [{
      outlets: {
        leftPanel: ['leni-nudges'],
        mainPanel: ['nudge-view', nudge._id]
      }
    }], {
      skipLocationChange: true,
      replaceUrl: false
    });
  }
}
