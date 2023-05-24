import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { filterOrders, getOrders } from 'src/app/store/orders/orders.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public form:FormGroup;
  /**
   *
   */
  constructor(
    private fb:FormBuilder,
    private store:Store<AppState>
  ) {
    this.form = this.fb.group({
      search:['']
    });
  }

  onChangeValue(){
    if (this.form.value.search.length > 0 ) {
      this.store.dispatch( filterOrders({ search:this.form.value.search }));
    }
    else{
      this.store.dispatch( getOrders());
    }
  }
}
