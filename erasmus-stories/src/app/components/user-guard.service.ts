import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()
export class UserGuard implements CanActivate {
can: boolean;
  constructor(private authService: AuthService) {
    this.authService.isAuthenticated().subscribe(value => this.can);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.can;
  }

}
