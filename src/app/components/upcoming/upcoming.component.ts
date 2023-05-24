import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { AppState } from 'src/app/store/app.reducer';
import { getOrders } from 'src/app/store/orders/orders.actions';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  public title:string = 'Upcoming';
  public url:string = 'upcoming';
  
}
