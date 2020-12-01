import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StateService } from '../state/state.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private stateService: StateService) {}

  canActivate() {
    let isAuthorized = this.stateService.authorized();

    return isAuthorized;
  }
}