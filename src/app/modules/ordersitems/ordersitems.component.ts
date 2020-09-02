import { Status } from './../../api/models/status.models';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {OrdersService} from '../../api/services/orders.service';
import { ActivatedRoute } from '@angular/router';
import {Orders} from '../../api/models/orders-models';

@Component({
  selector: 'app-ordersitems',
  templateUrl: './ordersitems.component.html',
  styleUrls: ['./ordersitems.component.css'],
  providers: [OrdersService]
})
export class OrdersitemsComponent implements OnInit {

  id: string;
  OrdersItemsList: any = [];
  orderDescription: string = window.history.state.order.orderDescription;

  OrderObject: Orders = {
    OrderId: window.history.state.order.orderId,
    Status: 0,
    OrderDescription: window.history.state.order.orderDescription,
    CreatedOn: window.history.state.order.createdOn,
    AuthDate: window.history.state.order.authDate
  };

  getTotal(val: number[]): number{
    let sum = 0;
    if (this.OrdersItemsList !== undefined){
      this.OrdersItemsList.forEach(orderitem => {
        sum += orderitem.unitPrice * orderitem.quantity;
      });
    }
    return sum;
  }

  Approbe() {
    console.log('Approbe: ' + JSON.stringify(this.OrderObject));
    this.ApprobeOrder(this.id, this.OrderObject);
  }

  Reject() {
    console.log('Reject: ' + JSON.stringify(this.OrderObject));
    this.RejectOrder(this.id);
  }

  constructor(
              public ordersService: OrdersService,
              private actRoute: ActivatedRoute) {
    this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(){
    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.loadOrdersItems(this.id);
  }

  loadOrdersItems(id) {
    return this.ordersService.getOrdersItems(id).subscribe((data: {}) => {
      this.OrdersItemsList = data;
    });
  }
  ApprobeOrder(id, order) {
    return this.ordersService.putOrders(id, order).subscribe((data: {}) => {
      console.log('ApprobeOrder: ' + data);
    });
  }
  RejectOrder(id) {
    return this.ordersService.deleteOrders(id).subscribe((data: {}) => {
      console.log('RejectOrder: ' + data);
    });
  }
}
