import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StateService } from '../state/state.service';

@Injectable()
export class CantActivateRouteGuard implements CanActivate {

  constructor(private stateService: StateService) {}

  canActivate() {
    let isAuthorized = this.stateService.authorized();

    return !isAuthorized;
  }
}