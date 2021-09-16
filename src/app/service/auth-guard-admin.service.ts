import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.user.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }


}
