import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListarComponent } from './book-listar.component';

describe('BookListarComponent', () => {
  let component: BookListarComponent;
  let fixture: ComponentFixture<BookListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
