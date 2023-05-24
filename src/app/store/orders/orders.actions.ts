import { createAction, props } from "@ngrx/store";
import { Order } from "src/app/models/order.model";

export const getOrders = createAction(
  '[Orders Store] Get Order',
);

export const setOrders = createAction(
  '[Orders Store] Set Order',
  props<{ orders:Order[] }>()
);

export const filterOrders = createAction(
  '[Orders Store] Filter Order',
  props<{ search:string }>()
);

export const setErrorResult = createAction(
  '[Orders Store] Set Error Orders',
  props<{ error:string }>()
);
