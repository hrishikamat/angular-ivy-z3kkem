import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-leni-frame',
  templateUrl: './leni-frame.component.html',
  styleUrls: ['./leni-frame.component.scss']
})
export class LeniFrameComponent implements OnInit {
  name = 'Set Leni-iframe';
  url: string = "https://app.leni.ai/#/&embedded=true";
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }

}
