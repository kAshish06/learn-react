import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGurad implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, routeState: RouterStateSnapshot) {
    let user = this.loginService.getUser();
    if (user) {
      return true;
    }
    this.router.navigate(['/login']);
  }
}
