import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCp8]'
})
export class Cp8Directive {

   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }

   @HostListener('mouseover') 
   onMouseOver() {
	   this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
	   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'black');
   }

   @HostListener('mouseleave') 
   onMouseLeave() {
	   this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
	   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white');
   }  
}
