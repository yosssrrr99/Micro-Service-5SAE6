import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnateComponent } from './donnate.component';

describe('DonnateComponent', () => {
  let component: DonnateComponent;
  let fixture: ComponentFixture<DonnateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
