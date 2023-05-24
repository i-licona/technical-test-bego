import { createAction, props } from "@ngrx/store";
import { CargoDetails } from "src/app/models/cargo-details.model";

export const getCargoDetails = createAction(
  '[Cargo Details Store] Get Cargo Detail',
);

export const setCargoDetails = createAction(
  '[Cargo Details Store] Set Cargo Detail',
  props<{ cargoDetails:CargoDetails }>()
);

export const setErrorResult = createAction(
  '[Cargo Details Store] Set Error Cargo Details',
  props<{ error:string }>()
);