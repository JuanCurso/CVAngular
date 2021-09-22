import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public auth: AngularFireAuth) { }

  logout() {
  	return this.auth.auth.signOut();
  }

  registrarUsuario(user: string, pass:string) {
  	return new Promise((resolve,reject) => {
  		this.auth.auth.createUserWithEmailAndPassword(user, pass)
  			.then(
  				resultado => {resolve(resultado);},
  				error => {reject(error)}
  			)
  	});
  }

  obtenerInfoCuenta() {
  	return this.auth.authState;
  }

  loginUsuario(user: string, pass:string) {
  	return new Promise((resolve,reject) => {
  		this.auth.auth.signInWithEmailAndPassword(user, pass)
  			.then(
  				resultado => {resolve(resultado);},
  				error => {reject(error)}
  			)
  	});
  }

  loginGoogle() {
    return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    return this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
}
