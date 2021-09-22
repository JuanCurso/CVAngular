import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	formulario: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.formulario = formBuilder.group({
			nombre: ["nombre por defecto", Validators.required],
			apellido: ["apellido por defecto", Validators.required],
			email: ["email@ejemplo.com", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]]

		});
	}

	validarFormulario(par) {
		console.log(par);
	}
}
