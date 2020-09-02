import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Orders} from '../models/orders-models';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

   //Base URL
   baseurl = '/api/';
   public getOrdersItems(id): Observable<any> {
    return this.httpClient.get<any>(this.baseurl + 'OrdersItems/OrderId/' + id);
  }

  public getOrdersStatus(status): Observable<any> {
    return this.httpClient.get<any>(this.baseurl + 'orders/status/' + status);
  }

   public getOrders(): Observable<any> {
    return this.httpClient.get<any>(this.baseurl + 'orders');
  }

  public deleteOrders(id): Observable<any> {
    return this.httpClient.delete<any>(this.baseurl + 'orders/' + id);
  }

  public putOrders(id, order): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(this.baseurl + 'orders/' + id, order, { headers });

  }

}
