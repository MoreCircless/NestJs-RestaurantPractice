import { Module, ValidationPipe } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [OrdersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}




