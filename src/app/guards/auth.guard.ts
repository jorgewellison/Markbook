import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) { }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) : Observable<boolean> | boolean {

    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['home']);

    return false;

  }
}
