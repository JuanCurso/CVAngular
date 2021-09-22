import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

/*@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})*/

@Directive({ 
     selector: '[cp5]' 
})

export class Componente1Component implements OnInit {

   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }

   @HostListener('mouseover') 
   onMouseOver() {
       this.renderer.setAttribute(this.elRef.nativeElement, 'value', 'Namaste!');
   }

   @HostListener('mouseleave') 
   onMouseLeave() {
       this.renderer.removeAttribute(this.elRef.nativeElement, 'value');
   }

  ngOnInit(): void {
  }

}
