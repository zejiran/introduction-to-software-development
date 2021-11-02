import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListarComponent } from './book-listar/book-listar.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookListarComponent, BookDetailComponent],
  exports: [BookListarComponent],
})
export class BookModule { }