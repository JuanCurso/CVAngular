import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoNombre'
})
export class FormatoNombrePipe implements PipeTransform {

  transform(nombre: string, apellido: string): string {
    return `${apellido}, ${nombre}` ;
  }

}
