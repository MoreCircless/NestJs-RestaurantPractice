export class CreateMealDto {
  userId: number;
  totalPrice: number;
  title: string;
  description?: string;
  price: number;
  items?: Array<number>;
}
