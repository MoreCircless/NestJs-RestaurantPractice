import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDate,
  IsDateString,
  IsEnum,
} from 'class-validator';

export enum ReservationStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
}

export class CreateReservationDto {
  @IsNotEmpty()
  tableId: number;

  @IsNotEmpty()
  userId: number;

  @IsDateString()
  date: string;

  @IsDateString()
  time: string;

  @IsString()
  @IsEnum(ReservationStatus)
  status: ReservationStatus;
}
