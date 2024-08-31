import { IsString, Min } from "class-validator";

export class CreateOrderDto {

  @Min(1)
  userId: number;

  @Min(0)
  totalPrice: number;

  @IsString()
  status: string;
}

