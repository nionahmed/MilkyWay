import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent {
  addProductMessage:string="";
  constructor(private productService : ProductService, private router :Router){}

  submit(data:product){
    this.productService.addProduct(data).subscribe((result)=>{
      if(result){
        //this.addProductMessage="product is successfully added";
        this.router.navigate(['seller-home']);
      }
      setTimeout(() => (this.addProductMessage = ""),3000);
    });
  }
}
