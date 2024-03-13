import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const sellerService = inject(SellerService);
  const router=inject(Router);
  if(localStorage.getItem('seller')){
    return true;
  }else{
    router.navigate(['seller-auth']);
    alert("please login first");
  }

  return sellerService.isSellerLoggedIn;
};
