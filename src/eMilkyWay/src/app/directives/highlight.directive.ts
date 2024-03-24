import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  isHighlighted=false;

  constructor(private el:ElementRef) { }
  @HostListener('click') onMouseClick(){
    if(this.isHighlighted){
      this.changeColor('blueviolet');
      this.isHighlighted=false;
    }
    else{
      this.changeColor('orangered');
      this.isHighlighted=true;

    }
    
  }

  private changeColor(color:string){
    this.el.nativeElement.style.color=color;
  }

}
