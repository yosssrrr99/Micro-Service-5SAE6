import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonementFrontComponent } from './abonement-front.component';

describe('AbonementFrontComponent', () => {
  let component: AbonementFrontComponent;
  let fixture: ComponentFixture<AbonementFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonementFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonementFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
