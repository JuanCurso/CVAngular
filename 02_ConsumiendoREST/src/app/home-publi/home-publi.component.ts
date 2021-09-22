import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../servicios/publicacion.service';

@Component({
  selector: 'app-home-publi',
  templateUrl: './home-publi.component.html',
  styleUrls: ['./home-publi.component.css']
})
export class HomePubliComponent implements OnInit {

  publicaciones: any;

  constructor(private publicacionService: PublicacionService) {
  	this.obtener();
  }

  ngOnInit(): void {
  }

  obtener() {
    this.publicacionService.obtenerPublicacion().subscribe(resultado => {
      this.publicaciones = resultado.publicaciones;
    },
    error => {
      console.log(JSON.stringify(error));
    });

  }

}
