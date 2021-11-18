/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { BookListarComponent } from "./book-listar.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Book } from "../book";
import { Editorial } from "src/app/editorial/editorial";
import * as faker from "faker";

describe("BookListarComponent", () => {
  let component: BookListarComponent;
  let fixture: ComponentFixture<BookListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListarComponent);
    component = fixture.componentInstance;
    let editorial = new Editorial(
      faker.random.number(),
      faker.lorem.sentence()
    );
    component.books = [
      new Book(
        faker.random.number(),
        faker.lorem.sentence(),
        faker.random.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.date.past(),
        editorial
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should have an figcaption element ", () => {
    expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
      // @ts-ignore
      component.books[0].name
    );

    expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
      // @ts-ignore
      component.books[0].editorial.name
    );
  });
});
