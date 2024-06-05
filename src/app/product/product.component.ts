import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {ProductService} from "../services/product.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NgIf
  ],
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProductById(Number(productId));
  }
}
