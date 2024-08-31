export class CreateMealDto {
  orderId: number;
  price: number;
  title: string;
  description?: string;
}

/*
 id          Int     @id @default(autoincrement())
  orderId     Int
  title       String  @unique
  description String?
  price       Float
*/