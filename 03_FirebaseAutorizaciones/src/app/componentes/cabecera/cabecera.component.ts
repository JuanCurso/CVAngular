import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

	isLogin: boolean;
	name:string;
	email: string;
  avatar: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  	this.usuarioService.obtenerInfoCuenta().subscribe(res => {
  		if (res) {
  			this.isLogin = true;
  			this.name = res.displayName;
  			this.email = res.email;
        this.avatar = res.photoURL;
  		} else {
  			this.isLogin = false;
  		}
  	});
  }

  salir() {
  	this.usuarioService.logout();
  }


}
