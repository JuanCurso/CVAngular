import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	texto1 = "texto prueba 1";
	texto2 = "TEXTO PRUEBA 2";
	numero1 = 1234567890.123456;
	numero2 = 123456.12;
	numero3 = 0.123456;
	fecha = new Date();
	persona = {
		"nombre": "Juan",
		"apellido": "Gomez",
		"edad": 33
	}
}
