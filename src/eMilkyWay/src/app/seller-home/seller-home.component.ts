import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChangefontStyleDirective } from '../directives/changefont-style.directive';


@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [NgFor, RouterLink, ChangefontStyleDirective],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {

  productList : undefined|product[];
  productMessage:undefined|string;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.productListing().subscribe((result)=>{
      this.productList=result;
    })
  }
  deleteProduct(id:string){
    console.log(id);
    this.productService.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="product is deleted";
        this.productService.productListing().subscribe((result)=>{
          this.productList=result;
        })
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined
    }, 3000);
  }
}
