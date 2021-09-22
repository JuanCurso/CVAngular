import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private usuarioService: UsuarioService, private router: Router, private toastr: ToastrManager) { }



  ngOnInit(): void {
  }

  onSubmitLogin() {
    this.usuarioService.loginUsuario(this.email, this.password)
      .then(
        resultado => {
          //this.toastr.successToastr("Alta de usuario correcto", "Alta");
          this.router.navigate(["/privado"]);
        },
        error => {
          console.log(error);
          this.toastr.errorToastr("Email o contraseña no válidos", "Error");
          this.router.navigate(["/login"]);
        }
      );
  }

  loginGoogle() {
    this.usuarioService.loginGoogle()
      .then(
        resultado => {
          //this.toastr.successToastr("Alta de usuario correcto", "Alta");
          this.router.navigate(["/privado"]);
        },
        error => {
          console.log(error);
          this.toastr.errorToastr("No se encuentra la cuenta de Google", "Error");
          this.router.navigate(["/login"]);
        }
      );    
  }

  loginFacebook() {
    this.usuarioService.loginFacebook()
      .then(
        resultado => {
          //this.toastr.successToastr("Alta de usuario correcto", "Alta");
          this.router.navigate(["/privado"]);
        },
        error => {
          console.log(error);
          this.toastr.errorToastr("No se encuentra la cuenta de Facebook", "Error");
          this.router.navigate(["/login"]);
        }
      );  
  }

}
