import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { FilterRange } from '../interfaces/filter-range.interface';
import { BookStorageService } from './book-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductFilterService {
  private products: Product[];

  constructor(private bookStorage: BookStorageService) {
    this.products = this.bookStorage.getBooks();
  }

  // -------------------------
  // FILTERS
  // -------------------------

  ageFilter = signal<FilterRange | null>(null);

  pagesFilter = signal<FilterRange | null>(null);

  ratingFilter = signal<number | null>(null);


  // -------------------------
  // FILTERED PRODUCTS
  // -------------------------

  filteredProducts = computed(() => {
    const age = this.ageFilter();

    const pages = this.pagesFilter();

    const rating = this.ratingFilter();

    return this.products.filter((product) => {
      // AGE
if (age !== null) {
  if (
    product.ageMax < age.min ||
    product.ageMin > age.max
  ) {
    return false;
  }
}

// PAGES
if (pages !== null) {
  if (product.pages < pages.min || product.pages > pages.max) {
    return false;
  }
}

// RATING
if (rating !== null) {
  if (product.rating < rating) {
    return false;
  }
}


      return true;
    });
  });

  // -------------------------
  // SET AGE
  // -------------------------

  setAgeFilter(filter: FilterRange): void {
    console.log('Age filter:', filter);

    this.ageFilter.set(filter);
  }

  // -------------------------
  // SET PAGES
  // -------------------------

  setPagesFilter(pages: FilterRange): void {
    console.log('Pages:', pages);

    this.pagesFilter.set(pages);

  }

  // -------------------------
  // SET RATING
  // -------------------------

  setRatingFilter(rating: number): void {
    console.log('Rating filter:', rating);

    this.ratingFilter.set(rating);

  }

  // -------------------------
  // CLEAR
  // -------------------------

  clearFilters(): void {
    this.ageFilter.set(null);

    this.pagesFilter.set(null);

    this.ratingFilter.set(null);
  }
}
