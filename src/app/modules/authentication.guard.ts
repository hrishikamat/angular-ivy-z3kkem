// may not be needed...


// import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras } from '@angular/router';

import { AdalService } from '../services/Adal/adal.service';

@Injectable()

export class AuthenticationGuard implements CanActivate {

constructor(private router: Router, private adalService: AdalService) {

    }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

let navigationExtras: NavigationExtras = {

queryParams: { 'redirectUrl': route.url }

        };

if (!this.adalService.getUserInfo()) {

this.router.navigate(['login'], navigationExtras);

        }

return true;

    }

}