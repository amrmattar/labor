import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { StorageService } from '../../core/services';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadPermissionResolver implements Resolve<boolean> {
  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.getUserPermission().pipe(
      tap((response) => {
        this.storageService.setItem('user-permission', response.permissions);
      })
    );
  }
}
