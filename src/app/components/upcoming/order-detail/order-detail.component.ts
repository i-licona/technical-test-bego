import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { AppState } from 'src/app/store/app.reducer';
import { getOrders } from 'src/app/store/orders/orders.actions';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  public orders:Order[] = [];
  public truckImg:string ='../assets//Images//inspect//App BeGo/Contenedores/Cargo Orders/Order 1/where to/address/Group 2.svg';
  public addressImg:string = '../assets//Images//inspect//App BeGo/Contenedores/Cargo Orders/Order 1/where to/address/marker.svg';
  /**
   *
   */
  constructor(
    private store:Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select('orders').pipe(map( (orderState) => orderState.orders)).subscribe((data) => {
      this.orders = data;
    });

    this.store.dispatch( getOrders() );
    
  }

  convertDate(date:number):string{
    return new Date(date).toLocaleDateString('en-us', { day:"numeric", month:"numeric", year:"numeric"});
  }

  convertTime(date?:number):string{
    let newDate = date != null ?  new Date(date) : new Date();
    let hoursMin = newDate.getHours() + ':' + newDate.getMinutes();
    return hoursMin;
  }
}
