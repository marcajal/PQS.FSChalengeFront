
import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../api/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {

  statusSelected: string = '0';

  selectedChangeHandler(event: any){
    this.statusSelected = event.target.value;
    this.loadOrders(this.statusSelected);
  }

  OrdersList: any = [];
  constructor(
    public ordersService: OrdersService
  ){}

  ngOnInit(){
    this.loadOrders(this.statusSelected);
  }
  loadOrders(status) {
    return this.ordersService.getOrdersStatus(status).subscribe((data: {}) => {
      console.log(data);
      this.OrdersList = data;
    });
  }
}
