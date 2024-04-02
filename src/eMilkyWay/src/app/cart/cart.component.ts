import { Component, computed, effect, signal,Signal, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  count = signal(0);
  x2Multiplier=signal(1);
  doubleCount: Signal<number>=computed(()=>this.count()*2);

  constructor(){
    effect(()=>{
      console.log("count : ", this.count());
    })
  }

  incrementCounter(){
    this.count.set(this.count()+1);
    this.x2Multiplier.update((oldvalue)=>{
      return oldvalue*2;
    })
  
  }
}
