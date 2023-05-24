import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrderService } from "src/app/services/order.service";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { getCargoDetails, setCargoDetails, setErrorResult } from "./cargo-details.actions";

@Injectable()
export class CargoDetailsEffects{
  /**
   *
   */
  constructor(
    private actions$:Actions,
    private service:OrderService
  ) { }

  getCargoDetails$ = createEffect(() => this.actions$.pipe(
    ofType( getCargoDetails ),
    mergeMap(() => this.service.getCargoDetails().pipe(
      map((details) => setCargoDetails({ cargoDetails: details })),
      catchError(( error:Error ) => of( setErrorResult({ error:error.message }) ))
    ))
  ));
}