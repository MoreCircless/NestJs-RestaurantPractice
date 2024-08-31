import { IsString, Min } from "class-validator";



export class CreateMealDto {

  @Min(1)
  orderId: number;

  @Min(0)
  price: number;

  @IsString()
  title: string;

  @IsString()
  description?: string;
}

/*
 id          Int     @id @default(autoincrement())
  orderId     Int
  title       String  @unique
  description String?
  price       Float
*/
