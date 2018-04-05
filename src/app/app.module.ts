import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BooksListComponent } from '../books/books-list/books-list.component'
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './shared/pipes/truncate.pipe'

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
