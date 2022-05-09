import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class RoleCheakerGuard implements CanActivate {

  constructor(
    private storageService: StorageService,
    private route: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userScope = this.storageService.getStringItem('granted_scopes');
    if (userScope && userScope.includes('kashnow.hrtoolapi')) {
      this.route.navigate(['hr', 'customer-search'])
      return false
    }
    return true;
  }

}
