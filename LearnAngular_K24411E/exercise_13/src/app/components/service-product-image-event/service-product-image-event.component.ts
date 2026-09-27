import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  templateUrl: './service-product-image-event.component.html',
  styleUrls: ['./service-product-image-event.component.css']
})
export class ServiceProductImageEventComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private pservice: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.pservice.getProductsWithImages();
  }

  viewDetail(f: Product): void {
    this.router.navigate(['service-product-image-event', f.ProductId]);
  }
}
