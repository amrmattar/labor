import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { LocalizationService } from 'src/app/core/services';

@Directive({
  selector: '[appRtl]'
})
export class RtlDirective {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private translation: LocalizationService
  ) {
    this.switchClassBasedOnLanguage();
  }

  /*Switch rtl class based on the chosen language from Translation Service*/
  switchClassBasedOnLanguage() {
    this.translation.checkOnChangeLang().subscribe(res => {
      if (res.lang === 'ar')
        this.renderer.addClass(this.elRef.nativeElement, 'rtl');
      else
        this.renderer.removeClass(this.elRef.nativeElement, 'rtl');
    });
  }

}
