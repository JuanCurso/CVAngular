import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	miLista:any;

  itemEditado:any = {
    id: "",
    name: "",
    newName: ""
  };

  constructor(private conexion: ConexionService) {
  	conexion.listaItems().subscribe(item => {
  		this.miLista = item;
  	});
  }

  ngOnInit(): void {
  }

  eliminar(item:any) {
    console.log(item);
    this.conexion.eliminarItem(item);
  }

  editar(item:any) {
    this.itemEditado.id = item.id;
    this.itemEditado.name = item.name;
    this.itemEditado.newName = "";
  }

  agregarEditado() {

    const miItemEditado:any = {
      id: "",
      name: ""
    };

    miItemEditado.id = this.itemEditado.id;
    miItemEditado.name = this.itemEditado.newName;

    this.conexion.editarItem(miItemEditado);
  }
}
