import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {ProductService} from "../services/product.service";
import {NgForOf} from "@angular/common";
import {SortByPricePipe} from "../pipes/sort-by-price.pipe";
import {FilterByNamePipe} from "../pipes/filter-by-name.pipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgForOf,
    SortByPricePipe,
    FilterByNamePipe
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any[] = [];
  searchTerm: string = '';
  sortOrder: string = 'asc';

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
