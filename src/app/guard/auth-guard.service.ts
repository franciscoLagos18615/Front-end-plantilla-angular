import { Router, CanActivate } from '@angular/router';
import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private _route: Router) { }
  canActivate() {
    if (this.userService.isLogedIn()) {
        return true;
    } else {
        this._route.navigate(['/login']);
        return false;
    }
}

}
