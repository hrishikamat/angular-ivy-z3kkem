import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { RiskInsightsLoginService } from "../../services/risk-insights/risk-insights-login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ 
    FormBuilder,
    RiskInsightsLoginService
  ]
})
export class LoginComponent implements OnInit {
  
  loginForm = this.formBuilder.group({
    username:'',
    secret:''
  });

  loggedIn: boolean = false;

  constructor( 
    private formBuilder:FormBuilder,
    private loginService: RiskInsightsLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe( (result) => {
      this.loggedIn = result;
    });
  }

  onSubmit(): void {
    // Process login data in db here
    console.warn('Your login has been submitted', this.loginForm.value);
    
    // TODO: implement correct login validation
    if( this.loginService.login( '', '' ) ){
      this.loginForm.reset();
      this.router.navigateByUrl('/risk-management');
    }
  }
  
  

  // Only AlphaNumeric
  keyPressAlphaNumeric(event) {
    var inp = String.fromCharCode(event.keyCode);

    //sanitize user input for authentication allowing for special characters for strong passwords
    if (/[a-zA-Z0-9-_'['']'`~:!'$'%&'*''+'=]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
