import { Component } from '@angular/core';

import { FilterPanelComponent }
  from './components/filter-panel/filter-panel.component';

import { ProductListComponent }
  from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FilterPanelComponent,
    ProductListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

}
