import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'orders', loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)},
  // { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'ordersitems/:id', loadChildren: () => import('./modules/ordersitems/ordersitems.module').then(m => m.OrdersitemsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
