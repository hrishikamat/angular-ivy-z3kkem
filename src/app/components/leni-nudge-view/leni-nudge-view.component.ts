import { Component, OnDestroy, OnInit } from '@angular/core';
import { LeniNudge } from "../../models/leni-nudge";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { LeniService } from "../../services/Leni/leni.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leni-nudge-view',
  templateUrl: './leni-nudge-view.component.html',
  styleUrls: ['./leni-nudge-view.component.scss'],
  providers: [ LeniService ]
})
export class LeniNudgeViewComponent implements OnInit, OnDestroy {

  nudge: LeniNudge;

  private id: string;
  private subcriptions: Subscription[] = [];
  private nudges: LeniNudge[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private leniService:LeniService) {

    }

  ngOnInit(): void {
    this.subcriptions.push(
      this.leniService.getAllNudges().subscribe( (response) => {
        this.nudges = response;
    }));

    this.subcriptions.push(
      this.activatedRoute.paramMap.subscribe( (params: ParamMap) => {
        this.id = params.get('id');
        this.getNudge();
    }));
  }

  getNudge():void {
    for(let n of this.nudges) {
      if(n._id == this.id){
        this.nudge = n;
        return;
      }
    }
  }

  ngOnDestroy(): void {
    for (let subcription of this.subcriptions) {
      subcription.unsubscribe();
    }
  }

}
