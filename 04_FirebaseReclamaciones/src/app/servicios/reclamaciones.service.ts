import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Reclamacion } from '../modelos/reclamacion';

@Injectable({
  providedIn: 'root'
})
export class ReclamacionesService {

  reclamacionList: AngularFireList<any>;
  selectedReclamacion: Reclamacion = new Reclamacion();

  constructor(private angularFireDatabase: AngularFireDatabase) {

  }

  obtenerReclamaciones() {
  	return this.reclamacionList = this.angularFireDatabase.list("reclamacion");
  }

  agregarReclamacion(reclamacion: Reclamacion) {
  	this.reclamacionList.push({
      titulo: reclamacion.titulo,
      texto: reclamacion.texto,
      localizacion: reclamacion.localizacion
    });
  }

  actualizarReclamacion(reclamacion: Reclamacion) {
  	this.reclamacionList.update(reclamacion.$key, {
      titulo: reclamacion.titulo,
      texto: reclamacion.texto,
      localizacion: reclamacion.localizacion
    });
  }

  eliminarReclamacion(id: any) {
  	this.reclamacionList.remove(id);
  }

}
