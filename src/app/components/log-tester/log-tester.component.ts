import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-log-tester',
  templateUrl: './log-tester.component.html',
  styleUrls: ['./log-tester.component.scss']
})
export class LogTesterComponent implements OnInit {

  constructor(private logger: LogService) { }

  testLog(): void {
    this.logger.log("Test the 'log()' Method");
  }
  ngOnInit(): void {
  }

}
