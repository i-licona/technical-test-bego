import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { getOrders } from 'src/app/store/orders/orders.actions';

@Component({
  selector: 'app-cargo-details',
  templateUrl: './cargo-details.component.html',
  styleUrls: ['./cargo-details.component.css']
})
export class CargoDetailsComponent {
  public title:string = 'Cargo Details';
  public url:string = 'upcoming';
  /**
   *
   */
  constructor(
    private store:Store<AppState>
  ) {
    
  }
}
