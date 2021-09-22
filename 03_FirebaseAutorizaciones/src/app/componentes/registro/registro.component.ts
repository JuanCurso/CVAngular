import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;

  constructor(private usuarioService: UsuarioService, private router: Router, private toastr: ToastrManager) { }

  ngOnInit(): void {
  }

  onSubmitRegistro() {
    this.usuarioService.registrarUsuario(this.email, this.password)
      .then(
        resultado => {
          this.toastr.successToastr("Alta de usuario correcto", "Alta");
          this.router.navigate(["/privado"]);
        },
        error => {
          console.log(error);
          this.toastr.errorToastr("Existe un problema para darte de alta. Inténtelo más tarde.", "Error");
          this.router.navigate(["/registro"]);
        }
      );

  	
  }
}
