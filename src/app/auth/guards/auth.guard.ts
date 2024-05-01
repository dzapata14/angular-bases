import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    CanMatchFn,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
  } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.services';
import { inject } from '@angular/core';


   
export const checkAuthStatus = (): boolean | Observable<boolean> => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    
    return authService.checkAuthentication().pipe(
        tap((isAuthenticated) => {
            if (!isAuthenticated) {
                router.navigate(['/auth/login']);
            }
        })
    );
};

export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot,state: RouterStateSnapshot) => { return checkAuthStatus(); };
       
export const canMatchGuard: CanMatchFn = (route: Route,segments: UrlSegment[]) => {   return checkAuthStatus(); };
    
    