import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { AddProductService } from '../services/add-product.service';
import { GetProductService } from '../services/get-product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  name: String;
  category: String;

  products: Product[];

  constructor(
    private addProductService: AddProductService,
    private getProductService: GetProductService
  ) { }

  ngOnInit() {
    this.getProductService.getProducts().subscribe(
      products => {
        this.products = products;
      }
    );
  }

  OnAddProduct() {
    var product = {
      name: this.name,
      category: this.category
    }
    this.addProductService.addProduct(product);
  }

  delete(id) {
    this.addProductService.deleteProduct(id).subscribe(
      data => {
        for (var i = 0; i < this.products.length; i++) {
          if (this.products[i]._id == id) {
            this.products.splice(i, 1);
          }
        }
      }
    );
  }
}
