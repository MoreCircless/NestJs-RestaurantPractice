import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateFeedbackDto {
  @IsInt()
  userId: number;

  @IsInt()
  orderId: number;

  @IsInt()
  rating: number;

  @IsString()
  @IsOptional()
  comment?: string;
}
