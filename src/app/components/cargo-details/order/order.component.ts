import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { CargoDetails, StatusList } from 'src/app/models/cargo-details.model';
import { AppState } from 'src/app/store/app.reducer';
import { getCargoDetails } from 'src/app/store/cargo-details/cargo-details.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  
  public cargoDetails:CargoDetails;

  /**
   *
   */
  constructor(
    private store:Store<AppState>
  ) {
  }
  ngOnInit(): void {
    this.store.select("cargoDetail").pipe(map((cargoDetailsState) => cargoDetailsState.cargoDetails ) ).subscribe(data =>{
      this.cargoDetails = data;
    });
    this.store.dispatch( getCargoDetails() );
  } 
}
