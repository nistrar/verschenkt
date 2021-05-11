import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductList } from '../models/product-list.model';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductList[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data.map(e => {
        return {
          id: e.payload.doc.id,
          data: e.payload.doc.data(),
        } as unknown as ProductList;
        
      })
    });

    

  }  

  
create(product: Product){
    this.productService.createProduct(product);
}

update(product: Product) {
  this.productService.updateProduct(product);
}

delete(id: string) {
  this.productService.deleteProduct(id);
}

}
