import { PartialType } from '@nestjs/swagger';
import { CreateTableDto } from './create-table.dto';
import { IsNumber, Min } from 'class-validator';

export class UpdateTableDto extends PartialType(CreateTableDto) {

}
