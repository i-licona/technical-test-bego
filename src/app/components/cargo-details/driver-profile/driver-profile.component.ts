import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  map } from 'rxjs';
import { CargoDetails, StatusList } from 'src/app/models/cargo-details.model';
import { AppState } from 'src/app/store/app.reducer';
import { getCargoDetails } from 'src/app/store/cargo-details/cargo-details.actions';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css']
})
export default class DriverProfileComponent implements OnInit {

  public cargoDetails:CargoDetails;
  public statusList:StatusList;

  /**
   *
   */
  constructor(
    private store:Store<AppState>
  ) {
  }
  ngOnInit(): void {
    this.store.select("cargoDetail").pipe( map((cargoDetailsState) => cargoDetailsState.cargoDetails ) ).subscribe(data =>{
      this.cargoDetails = data;
      this.statusList = this.cargoDetails?.status_list;
    });

    this.store.dispatch( getCargoDetails() );

  }  
}
