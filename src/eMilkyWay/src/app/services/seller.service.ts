import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';
import { SignUp, Login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  //isSellerLoggedIn=false;
  isLoginError=new EventEmitter<boolean>(false);
  //isLoginError=false;
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    this.http.post("http://localhost:3000/seller",
      data,
      { observe: 'response' }
    ).subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      //this.isSellerLoggedIn=true;
      localStorage.setItem('seller', JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
      console.log(result);
    });
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      //this.isSellerLoggedIn=true;

      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data: Login) {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: 'response' }
    ).subscribe((result: any) => {
      console.log(result);
      if (result && result.body && result.body.length===1) {
        //this.isLoginError=false;
        this.isLoginError.emit(false);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }
      else {
      this.isLoginError.emit(true);
      //this.isLoginError=true;
      }
    })
  }
}
