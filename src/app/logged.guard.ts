import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate{
  constructor(private AuthService: AuthServiceService){}
  canActivate(
    next: ActivatedRouteSnapshot, RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
      const isLogged = this.AuthService.logado();
      console.log('canActivate', isLogged);
      return isLogged;
    }
}
