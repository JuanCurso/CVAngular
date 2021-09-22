import { Component } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild("myList")

	myList: ElementRef;

	constructor(private renderer:Renderer2) {

	}

	myCreateElement() {
		const li = this.renderer.createElement('li');
	    const text = this.renderer.createText('Click here to add li');
	    this.renderer.appendChild(li, text);
	    this.renderer.appendChild(this.myList.nativeElement, li);
 	}

 	selectElement() {
		const element = this.renderer.selectRootElement('p');
		const text = this.renderer.createText('Namaste!!!');
     	this.renderer.appendChild(element, text);
     	this.renderer.addClass(element.nativeElement, 'my-class');

 	}
	addMyClass() {

		// this.renderer.addClass(element.nativeElement, 'my-class');
	}
}
