import { Component, OnInit, OnChanges} from '@angular/core';
// import { IBook } from '../book';
// interface IBook {
//   bookAuthor: string;
//   bookTitle: string;
//   bookPrice: number;
//   bookDescription: string;
//   publishedOn: Date;
//   inStock: string;
//   bookReviews: number;
//   hardcover?: boolean;
// }

@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html',
  styleUrls: ['../../app/app.component.css']
})

export class BooksListComponent implements OnInit, OnChanges {
  ngOnInit(){
    console.log('Init', this.booksInStock);
  }
  ngOnChanges(){
    console.log('new change detected');
  }

  changeMethod(): void {
    this.animals= ['dog', 'cat'];
    console.log('change method happened', this.animals);
  }

  animals: string[] = ['zebra', 'moose'];
  showImage : boolean = true;
  booksInStock :number = 2

  books: any[]= [{
    bookAuthor: "Tom Jones",
    bookTitle: "War and Peace 2",
    bookPrice: 29.95,
    bookDescription:"Book of historical fiction",
    publishedOn: new Date('02/11/1921'),
    inStock: "yes",
    bookReviews: 15,
  }]

  toggleImage():void {
    this.showImage = !this.showImage;
  }
}
