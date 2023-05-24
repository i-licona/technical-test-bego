export interface CargoDetails{
  _id:string;
  stamp:boolean;
  reference_number:string;
  status:number;
  completion_percentage:number;
  cargo:[];
  user_id:string;
  order_number:number;
  created:number;
  distance_mts:number;
  manager:[];
  destinations:Destinations[];
  bego_order:boolean;
  version:string;
  ETA:number;
  stampedPercentage:number;
  start_date:number;
  end_date:number;
  status_list:StatusList;
}

export interface StatusList{
  pickup:[
    {
      active:boolean;
      status:string;
    }
  ]
}

export interface CargoDetailsState{
  error?:string;
  cargoDetails:CargoDetails;
}

export interface ResponseCargoDetails{
  result:CargoDetails;
}

export interface Destinations{
  address:string;
  status:number;
  startDate:number;
  contact_info:ContactInfo;
}

export interface ContactInfo{
  country_code:string;
  email:string;
  name:string;
  rfc:string;
  telephone:string;
}