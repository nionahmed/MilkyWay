import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { HttpClientModule } from '@angular/common/http';
import { SignUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  constructor(private sellerService: SellerService, private router:Router){}
  signUp(data:SignUp){
    this.sellerService.userSignUp(data).subscribe((result)=>{
      if(result){
        this.router.navigate(['seller-home']);
      }
    });
  }
}
