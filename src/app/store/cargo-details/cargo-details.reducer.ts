import { createReducer,on } from "@ngrx/store";
import { CargoDetailsState } from "src/app/models/cargo-details.model";
import { getCargoDetails, setCargoDetails, setErrorResult } from "./cargo-details.actions";

export const cargoDetailsState:CargoDetailsState = {
  error:null,
  cargoDetails:null
};

export const cargoDetailsReducer = createReducer(
  cargoDetailsState,
  on( getCargoDetails, (state) => ({ ...state } ) ),
  on( setCargoDetails, (state, { cargoDetails }) =>({
    ...state,
    cargoDetails:cargoDetails
  })),
  on( setErrorResult, (state, { error }) =>({
    ...state,
    error:error
  }))
);