import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { Category } from '../models/catalog.model';

@Component({
  selector: 'app-service-product-catalog',
  standalone: false,
  templateUrl: './service-product-catalog.component.html',
  styleUrls: ['./service-product-catalog.component.css']
})
export class ServiceProductCatalogComponent implements OnInit {
  public categories: Category[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}
