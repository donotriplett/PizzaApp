import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaUpdateComponent } from './pizza-update.component';

describe('PizzaUpdateComponent', () => {
  let component: PizzaUpdateComponent;
  let fixture: ComponentFixture<PizzaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
