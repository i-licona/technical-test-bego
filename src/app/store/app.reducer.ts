import { ActionReducerMap } from '@ngrx/store';
import { OrderState } from "../models/order.model";
import { orderReducer } from "./orders/orders.reducer";
import { CargoDetailsState } from '../models/cargo-details.model';
import { cargoDetailsReducer } from './cargo-details/cargo-details.reducer';

export interface AppState{
  orders:OrderState,
  cargoDetail:CargoDetailsState
}

export const appReducers:ActionReducerMap<AppState> = {
  orders:orderReducer,
  cargoDetail:cargoDetailsReducer
}
