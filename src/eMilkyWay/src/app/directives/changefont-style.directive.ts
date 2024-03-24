import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangefontStyle]',
  standalone: true
})
export class ChangefontStyleDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.changeFontWeight('bold');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeFontWeight('normal');
  }

  private changeFontWeight(font:string){
    this.el.nativeElement.style.fontWeight=font;
  }

}
