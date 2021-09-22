import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ReclamacionesService } from '../servicios/reclamaciones.service';

import { Reclamacion } from '../modelos/reclamacion';


@Component({
  selector: 'app-reclamaciones',
  templateUrl: './reclamaciones.component.html',
  styleUrls: ['./reclamaciones.component.css']
})
export class ReclamacionesComponent implements OnInit {

  reclamacionLista: Reclamacion[];

  constructor(private toastr: ToastrManager, public reclamacionesService: ReclamacionesService) {

  }

  ngOnInit(): void {
  	this.obtener();
  }

  obtener() {
  	var contenido = this.reclamacionesService.obtenerReclamaciones();

  	//Para consiguir la subscripcion a la BBDD remota
  	contenido.snapshotChanges().subscribe(item => {
  		this.reclamacionLista = [];

  		item.forEach(elemento => {
  			var registro = elemento.payload.toJSON();
  			registro["$key"] = elemento.key;

  			this.reclamacionLista.push(registro as Reclamacion);
  		})
  	});
  }
  
  editar(reclamacion: Reclamacion) {
  	this.reclamacionesService.selectedReclamacion = Object.assign({}, reclamacion);
  }

  eliminar(id) {
  	if (confirm("¿Está seguro que quiere borrar el registro?") == true) {
  		this.reclamacionesService.eliminarReclamacion(id);
		this.toastr.infoToastr("Se ha borrado la reclamación", "Borrado");

  	}
  }

  onSubmit(reclamacionForm: NgForm) {
  	console.log(JSON.stringify(reclamacionForm.value));

  	if (reclamacionForm.value.$key == null) {

	  	this.reclamacionesService.agregarReclamacion(reclamacionForm.value);
		this.resetForm(reclamacionForm);
		this.toastr.successToastr("Se ha dado de alta la reclamación", "Alta");

  	} else {

	  	this.reclamacionesService.actualizarReclamacion(reclamacionForm.value);
		this.resetForm(reclamacionForm);
		this.toastr.successToastr("Se ha actualizado la reclamación", "Actualización");
  	}

  }

  resetForm(reclamacionForm: NgForm) {
  	if (reclamacionForm != null) {
  		reclamacionForm.reset();

  		this.reclamacionesService.selectedReclamacion = {
  			$key: null,
  			titulo: "",
  			texto: "",
  			localizacion: ""
  		};
  	}
  }
}
