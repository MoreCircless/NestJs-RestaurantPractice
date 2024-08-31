export class CreateOrderDto {
  userId: number;
  //items : Meals[];
  totalPrice: number;
  status: OrderStatus;
}

export enum OrderStatus {
  PENDING = 'PENDING',
  SUCCESSFUL = 'SUCCESSFUL',
}
