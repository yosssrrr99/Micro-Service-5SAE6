import { TestBed } from '@angular/core/testing';

import { ReservationRoomService } from './reservation-room.service';

describe('ReservationRoomService', () => {
  let service: ReservationRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
