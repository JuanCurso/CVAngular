import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCp7]'
})
export class Cp7Directive {

   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
   @HostListener('mouseover') 
   onMouseOver() {
       this.renderer.addClass(this.elRef.nativeElement, 'abc');
       //Add more class
       this.renderer.addClass(this.elRef.nativeElement, 'efg');
   }
   @HostListener('mouseleave') 
   onMouseLeave() {
       this.renderer.removeClass(this.elRef.nativeElement, 'abc');
       //Remove more class
       this.renderer.removeClass(this.elRef.nativeElement, 'efg');
   } 
}
