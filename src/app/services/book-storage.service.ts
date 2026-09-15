import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class BookStorageService {

  private books: Product[] = [

{
  id: 1,
  name: 'The Adventure',
  ageMin: 8,
  ageMax: 12,
  pages: 150,
  rating: 4.5
},

{
  id: 2,
  name: 'Mystery Island',
  ageMin: 12,
  ageMax: 16,
  pages: 250,
  rating: 4.0
},

{
  id: 3,
  name: 'Space Explorer',
  ageMin: 6,
  ageMax: 10,
  pages: 85,
  rating: 4.5
},

{
  id: 4,
  name: 'Dark Forest',
  ageMin: 16,
  ageMax: 18,
  pages: 350,
  rating: 3.0
},

{
  id: 5,
  name: 'Ocean Discovery',
  ageMin: 7,
  ageMax: 11,
  pages: 120,
  rating: 4.5
},

{
  id: 6,
  name: 'The Lost Kingdom',
  ageMin: 10,
  ageMax: 14,
  pages: 275,
  rating: 4.5
},

{
  id: 7,
  name: 'Robot World',
  ageMin: 8,
  ageMax: 12,
  pages: 190,
  rating: 4.0
},

{
  id: 8,
  name: 'Haunted House',
  ageMin: 13,
  ageMax: 17,
  pages: 220,
  rating: 3.5
},

{
  id: 9,
  name: 'Animal Adventures',
  ageMin: 5,
  ageMax: 8,
  pages: 60,
  rating: 4.5
},

{
  id: 10,
  name: 'The Great Expedition',
  ageMin: 12,
  ageMax: 16,
  pages: 320,
  rating: 4.5
},

{
  id: 11,
  name: 'Under the Stars',
  ageMin: 9,
  ageMax: 13,
  pages: 140,
  rating: 4.0
},

{
  id: 12,
  name: 'Dragon Mountain',
  ageMin: 10,
  ageMax: 15,
  pages: 410,
  rating: 4.5
},

{
  id: 13,
  name: 'The Secret Garden',
  ageMin: 8,
  ageMax: 12,
  pages: 180,
  rating: 4.5
},

{
  id: 14,
  name: 'Future City',
  ageMin: 14,
  ageMax: 18,
  pages: 290,
  rating: 4.0
},

{
  id: 15,
  name: 'Jungle Quest',
  ageMin: 7,
  ageMax: 11,
  pages: 110,
  rating: 4.5
},

{
  id: 16,
  name: 'The Last Detective',
  ageMin: 15,
  ageMax: 18,
  pages: 375,
  rating: 5.0
}

  ];


  getBooks(): Product[] {
    return this.books;
  }

}