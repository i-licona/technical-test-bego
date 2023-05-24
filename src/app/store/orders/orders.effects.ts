import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getOrders, setErrorResult, setOrders } from "./orders.actions";
import { OrderService } from "src/app/services/order.service";
import { catchError, map, mergeMap, of, tap } from "rxjs";

@Injectable()
export class OrderEffects{
  /**
   *
   */
  constructor(
    private actions$:Actions,
    private service:OrderService
  ) { }

  getOrders$ = createEffect(() => this.actions$.pipe(
    ofType( getOrders ),
    mergeMap(() => this.service.getOrders().pipe(
      map((orders) => setOrders({ orders: orders })),
      catchError(( error:Error ) => of( setErrorResult({ error:error.message }) ))
    ))
  ));
}