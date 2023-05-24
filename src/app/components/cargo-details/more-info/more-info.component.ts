import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { CargoDetails, ContactInfo, Destinations } from 'src/app/models/cargo-details.model';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  public cargoDetails:CargoDetails;
  public destinations:Destinations[];
  public contactInfo:ContactInfo;
  /**
   *
   */
  constructor(
    private store:Store<AppState>
  ) {
  }
  ngOnInit(): void {
    this.store.select('cargoDetail').pipe(map( cargoState => cargoState.cargoDetails)).subscribe((data) => {
      if (data != undefined) {
        this.cargoDetails = data;
        this.destinations = this.cargoDetails.destinations;
        this.contactInfo = this.destinations[0].contact_info;
        
      }
      
    });
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
