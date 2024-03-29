import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCp6]'
})
export class Cp6Directive {

   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
   @HostListener('click') 
   performTask() {
      this.renderer.setProperty(this.elRef.nativeElement, 'id', 'xyz');
   }
}
