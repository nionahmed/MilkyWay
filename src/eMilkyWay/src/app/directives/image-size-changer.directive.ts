import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageSizeChanger]',
  standalone: true
})
export class ImageSizeChangerDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.increaseSize('150px', '150px');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.increaseSize('100px', '100px');
  }

  private increaseSize(height:string, width:string){
    this.el.nativeElement.style.height=height;
    this.el.nativeElement.style.width=width;
  }
}