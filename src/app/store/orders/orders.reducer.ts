import { createReducer,on } from "@ngrx/store";
import { OrderState } from "src/app/models/order.model";
import { filterOrders, getOrders, setErrorResult, setOrders } from "./orders.actions";

export const orderState:OrderState = {
  error:null,
  orders:[]
};

export const orderReducer = createReducer(
  orderState,
  on( getOrders, (state) => ({ ...state } ) ),
  on( setOrders, (state, { orders }) =>({
    ...state,
    orders:[ ...orders ]
  })),
  on( setErrorResult, (state, { error }) =>({
    ...state,
    error:error
  })),
  on( filterOrders, (state, { search }) => ({
    ...state,
    orders:state.orders.filter((x) => x.order_number.toLowerCase().includes(search.toLowerCase()))
  })),
);