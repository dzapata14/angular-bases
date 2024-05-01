import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    CanMatchFn,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
  } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.services';
import { inject } from '@angular/core';

export const PublicCheckAuthStatus = (): boolean | Observable<boolean> => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    
    return authService.checkAuthentication().pipe(
        tap((isAuthenticated) => {
            console.log(isAuthenticated);
            if (!isAuthenticated) {
                router.navigateByUrl('/heroes/list');
            }
        }),
        map(isAuthenticated => !isAuthenticated)
    );
};

export const PublicActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot,state: RouterStateSnapshot) => { return PublicCheckAuthStatus(); };
       
export const PublicMatchGuard: CanMatchFn = (route: Route,segments: UrlSegment[]) => {   return PublicCheckAuthStatus(); };
    
    