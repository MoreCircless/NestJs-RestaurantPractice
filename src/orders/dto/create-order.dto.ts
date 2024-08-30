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

// id Int @id @default(autoincrement())
// userId Int
// items Meals[]
// totalPrice Float
// status String
// createdAt DateTime @default(now())
// updatedAt DateTime @updatedAt
