import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { NgFor, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, NgFor, UpperCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  popularProduct:undefined|product[];
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.popularProducts().subscribe((data)=>{
      this.popularProduct=data;
    })
  }
}
