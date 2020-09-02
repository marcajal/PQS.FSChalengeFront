import { TestBed } from '@angular/core/testing';

import { OrdersitemsService } from './ordersitems.service';

describe('OrdersitemsService', () => {
  let service: OrdersitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
