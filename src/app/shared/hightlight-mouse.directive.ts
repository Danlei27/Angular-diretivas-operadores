import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[hightlightMouse]'
})
export class HightlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color','yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', 'white'
    // )
    this.backgroundColor = 'white';
  }
  
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) { }

}
