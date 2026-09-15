import { Component } from '@angular/core';

import { ProductFilterService }
  from '../../services/product-filter.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(
    public filterService: ProductFilterService
  ) {}

}
