import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-update-product',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './seller-update-product.component.html',
  styleUrl: './seller-update-product.component.css'
})
export class SellerUpdateProductComponent implements OnInit {
  productData:undefined|product;
  productMessage:undefined|string;
  constructor(private route :ActivatedRoute, private productService:ProductService, private router:Router ){}

  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id');
    productId && this.productService.getProduct(productId).subscribe((data)=>{
      this.productData=data;
    })
  }
  submit(data:product){
    if(this.productData){
      data.id=this.productData.id;
    }
    this.productService.updateProduct(data).subscribe((result)=>{
      if(result){
        //this.productMessage="Product has Updated";
        this.router.navigate(['seller-home']);
      }
    })
    setTimeout(() => {
      this.productMessage=undefined;
    }, 3000);
  }
}
