import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order, ResponseOrder } from '../models/order.model';
import { CargoDetails, ResponseCargoDetails } from '../models/cargo-details.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http:HttpClient
  ) { }

    public getOrders():Observable<Order[]>{
      return this.http.get<ResponseOrder>(`https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming`)
      .pipe(map( (resp) => resp.result)
      );
    }

    public getCargoDetails():Observable<CargoDetails>{
      return this.http.get<ResponseCargoDetails>(`https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders`)
      .pipe(map( (resp) => resp.result)
      );
    }
}
