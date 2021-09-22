import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicios/persona.service';
/*Nos permite mostrar mensajes:
  - successToastr
  - errorToastr
  - warningToastr
  - infoToastr
  - customToastr*/
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

	miPersona: any = {
		Nombre: "",
		Apellido: "",
		Edad: ""
	}

	personas: any;

  constructor(private personaService:PersonaService, private toastr: ToastrManager) {
    this.obtener();
  }

  ngOnInit(): void {
  }

  obtener() {
    this.personaService.obtenerPersonas().subscribe(resultado => {
      this.personas = resultado.personas;
    },
    error => {
      console.log(JSON.stringify(error));
    });
  }

  anadir() {
    console.log("esto recibo del formulario");
    console.log(JSON.stringify(this.miPersona));
    this.personaService.anadirPersona(this.miPersona).subscribe(resultado => {
      this.toastr.successToastr("Persona dada de alta", "Alta ok");
      this.obtener();
    },
    error => {
      console.log(JSON.stringify(error));
    });
  }

  eliminar(id) {
    this.personaService.eliminarPersona(id).subscribe(resultado => {
      this.toastr.warningToastr("Persona eliminada", "Atención");
      this.obtener();
    },
    error => {
      console.log(JSON.stringify(error));
    });
  }

}
