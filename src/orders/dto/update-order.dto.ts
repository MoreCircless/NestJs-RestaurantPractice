import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto, OrderStatus } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    status?: OrderStatus;
}
