import { PartialType } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class CreateTableDto  {

  @IsNumber()
  @Min(1)
  number: number;

  @IsNumber()
  @Min(1)
  capacity: number;
}


