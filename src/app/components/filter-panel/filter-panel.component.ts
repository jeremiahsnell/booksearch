import { Component } from '@angular/core';

import { FilterButtonComponent }
  from '../filter-button/filter-button.component';

import { ProductFilterService }
  from '../../services/product-filter.service';

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [FilterButtonComponent],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.css'
})
export class FilterPanelComponent {

  constructor(
    private filterService: ProductFilterService
  ) {}


  setAge(min: number, max: number): void {

    this.filterService.setAgeFilter({
      min,
      max
    });

  }


  setPages(min: number, max: number): void {

    this.filterService.setPagesFilter(
      {
        min,
        max
      }
    );

  }


  setRating(rating: number): void {

    this.filterService.setRatingFilter(
      rating);

  }


  clearFilters(): void {

    this.filterService.clearFilters();

  }

  filterKeys = ['age', 'pages', 'rating'];
  
  filterable: Filter[] = [

    { label: '0-3', key: 'age', min: 0, max: 3 },
    { label: '3-8', key: 'age', min: 3, max: 8 },
    { label: '6-10', key: 'age', min: 6, max: 10 },
    { label: '8-12', key: 'age', min: 8, max: 12 },
    { label: '16-18', key: 'age', min: 12, max: 18 },
    { label: '18+', key: 'age', min: 18, max: 1000 },

    { label: '50', key: 'pages', min: 0, max: 50 },
    { label: '100', key: 'pages', min: 0, max: 100 },
    { label: '200', key: 'pages', min: 0, max: 200 },
    { label: '300', key: 'pages', min: 0, max: 300 },
    { label: '300+', key: 'pages', min: 300, max: Infinity },

    { label: '1', key: 'rating', min: 1, max: 1 },
    { label: '2', key: 'rating', min: 2, max: 2 },
    { label: '3', key: 'rating', min: 3, max: 3 },
    { label: '4', key: 'rating', min: 4, max: 4 },
    { label: '5', key: 'rating', min: 5, max: 5 }

  ];


setFilter(filter: Filter): void {

  if (filter.key === 'age') {
    this.setAge(filter.min, filter.max);
  }

  if (filter.key === 'pages') {
    this.setPages(filter.min, filter.max);
  }

  if (filter.key === 'rating') {
    this.setRating(filter.max);
  }

}
}

interface Filter {
  label: string;
  key: string;
  min: number;
  max: number;
}