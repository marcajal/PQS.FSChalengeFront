import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersitemsRoutingModule } from './ordersitems-routing.module';
import { OrdersitemsComponent } from './ordersitems.component';


@NgModule({
  declarations: [OrdersitemsComponent],
  imports: [
    CommonModule,
    OrdersitemsRoutingModule
  ]
})
export class OrdersitemsModule { }
