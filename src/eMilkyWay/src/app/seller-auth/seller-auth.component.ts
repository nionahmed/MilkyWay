import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { HttpClientModule } from '@angular/common/http';
import { SignUp, Login } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {
  constructor(private sellerService: SellerService, private router:Router){}
  showLogin=false;

  authError:string="";
  signUp(data:SignUp){
    this.sellerService.userSignUp(data);
    
  }
  login(data:Login){
    this.sellerService.userLogin(data);

    this.sellerService.isLoginError.subscribe((iserror)=>{
      if(iserror){
        this.authError="Incorrect Email or Password";
      }
    })
    /*if(this.sellerService.isLoginError){
      this.authError="Incorrect Email or Password";
    }*/
  }

  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }
}
