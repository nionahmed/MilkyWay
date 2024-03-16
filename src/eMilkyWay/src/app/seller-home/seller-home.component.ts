import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {

  productList : undefined|product[];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.productListing().subscribe((result)=>{
      this.productList=result;
    })
  }
}
