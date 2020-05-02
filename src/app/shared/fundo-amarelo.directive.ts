import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'// 'p[fundoAmarelo]' assim somente tag p podem usar esse atributo
})
export class FundoAmareloDirective {
//recomendado usar renderer, no lugar do element, motivos de segurança!!! 
  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2) { 
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
       'yellow'
    );
  }

}
