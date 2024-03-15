import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent {
  addProductMessage:string="";
  constructor(private productService : ProductService){}

  submit(data:product){
    this.productService.addProduct(data).subscribe((result)=>{
      if(result){
        this.addProductMessage="product is successfully added";
      }
      setTimeout(() => (this.addProductMessage = ""),3000);
    });
  }
}
