import { Module, ValidationPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from 'src/prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';
/*{
    provide: APP_GUARD,
    useClass: AuthGuard,
  }*/
@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService, ],
})
export class OrdersModule {}
