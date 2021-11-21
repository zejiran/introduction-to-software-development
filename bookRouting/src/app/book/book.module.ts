import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListarComponent } from './book-listar/book-listar.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  declarations: [BookListarComponent, BookDetailComponent],
  exports: [BookListarComponent, BookDetailComponent],
})
export class BookModule {
}
