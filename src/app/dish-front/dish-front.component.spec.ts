import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishFrontComponent } from './dish-front.component';

describe('DishFrontComponent', () => {
  let component: DishFrontComponent;
  let fixture: ComponentFixture<DishFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
