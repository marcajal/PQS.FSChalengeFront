import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersitemsComponent } from './ordersitems.component';

const routes: Routes = [{ path: '', component: OrdersitemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersitemsRoutingModule { }
