import { NgStyle, NgSwitch, NgSwitchCase, UpperCasePipe } from '@angular/common';
import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';
import { RouterLink,Router} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgSwitch, NgSwitchCase, NgStyle,UpperCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  menuType: string="default";
  sellerName:string='';
  currentStyles:Record<string, string>={};
  constructor(private route:Router){  }

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType="seller";
          this.currentStyles={
            'color':'blueviolet'
          }
          
          let sellerStore =localStorage.getItem('seller');
          let sellerData=sellerStore && JSON.parse(sellerStore);
          this.sellerName=sellerData[0].name;
        }
       
        else{
          this.menuType="default";
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']); 
    
  }
}
