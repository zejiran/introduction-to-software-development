import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from "../book.service";

@Component({
  selector: 'app-book-listar',
  templateUrl: './book-listar.component.html',
  styleUrls: ['./book-listar.component.css']
})
export class BookListarComponent implements OnInit {
  books: Array<Book> | undefined;

  constructor(private bookService: BookService) {
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
      });
  }

  ngOnInit() {
    this.getBooks();
  }
}
