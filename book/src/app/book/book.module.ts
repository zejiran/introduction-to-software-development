import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListarComponent } from './book-listar/book-listar.component';

@NgModule({
  declarations: [
    BookListarComponent
  ],
  exports: [
    BookListarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
