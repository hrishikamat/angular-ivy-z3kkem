import { NgModule } from '@angular/core';

import { OAuthCallBackComponent } from '../components/oauth-call-back/oauth-call-back.component';

import { AuthenticationGuard } from './authentication.guard';

@NgModule({

imports: [],

declarations: [OAuthCallBackComponent],

providers: [AuthenticationGuard]

})

export class OAuthHandshakeModule { }