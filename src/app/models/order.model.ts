export interface Order{
  _id:string;
  status:number;
  order_number:string;
  manager:string;
  driver:string;
  version:string;
  type:string;
  destinations:Destinations[];
}

export interface Destinations{
  address:string;
  start_date:number;
  end_date:number;
  nickname:string;
  show_navigation:boolean;
}

export interface ResponseOrder{
  result:Order[];
}

export interface OrderState{
  orders:Order[],
  error?:string;
}