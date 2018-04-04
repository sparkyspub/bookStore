import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent {
  showImage : boolean = true;
  booksInStock :number = 2

  toggleImage():void {
    this.showImage = !this.showImage;
  }
}
