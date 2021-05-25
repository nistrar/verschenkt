import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
