import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangePictureSize]'
})
export class ChangePictureSizeDirective {
  // You can use HostBinding to directly bind to host element properties
  @HostBinding('style.height.px') height: number = 100; // Default height
  @HostBinding('style.width.px') width: number = 100; // Default width

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changePictureSize(150, 150);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changePictureSize(100, 100);
  }

  private changePictureSize(height: number, width: number) {
    this.height = height;
    this.width = width;
  }
}
