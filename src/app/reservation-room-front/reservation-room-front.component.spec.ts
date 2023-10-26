import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationRoomFrontComponent } from './reservation-room-front.component';

describe('ReservationRoomFrontComponent', () => {
  let component: ReservationRoomFrontComponent;
  let fixture: ComponentFixture<ReservationRoomFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationRoomFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationRoomFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
