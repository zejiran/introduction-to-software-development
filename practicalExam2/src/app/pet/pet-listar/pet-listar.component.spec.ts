import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListarComponent } from './pet-listar.component';

describe('PetListarComponent', () => {
  let component: PetListarComponent;
  let fixture: ComponentFixture<PetListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
