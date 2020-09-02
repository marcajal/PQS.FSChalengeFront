import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersitemsComponent } from './ordersitems.component';

describe('OrdersitemsComponent', () => {
  let component: OrdersitemsComponent;
  let fixture: ComponentFixture<OrdersitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
