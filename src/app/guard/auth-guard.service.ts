import { Router, CanActivate } from '@angular/router';
import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private _route: Router, private authService: AuthService
    , private tokenStorage: TokenStorageService) {
   }
   canActivate() {
    if (this.tokenStorage.getToken()) {
        return true;
    } else {
        this._route.navigate(['/login']);
        return false;
    }
}

}
