import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router,
	Route
} from '@angular/router';

import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioService } from '../servicios/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private usuarioService: UsuarioService, private angularFireAuth: AngularFireAuth,
  	private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  	this.usuarioService.obtenerInfoCuenta().subscribe(res => {
  		if (!res) {
  			this.router.navigate(["/login"]);
  			return false;
  		}
  	});

    return true;
  }

}
