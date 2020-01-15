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
    this.GetProducts();
  }

  GetProducts() {
    this.getProductService.getProducts().subscribe(
      products => {
        this.products = products;
      }, (err) => {
        alert(err);
      }
    );
  }

  OnAddProduct() {
    var product = {
      name: this.name,
      category: this.category
    }
    this.addProductService.addProduct(product).subscribe(
      response => {
        console.log(response);
      },
      error => {
        alert(error);
      },
      () => {
        this.GetProducts();
      }
    );
  }

  delete(id) {
    this.addProductService.deleteProduct(id).subscribe(
      () => {
        for (var i = 0; i < this.products.length; i++) {
          if (this.products[i]._id == id) {
            this.products.splice(i, 1);
          }
        }
      },
      error => {
        alert(error);
      },
      () => {
        this.GetProducts();
      }
    );
  }
}
