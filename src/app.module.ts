import { Module, ValidationPipe } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TablesModule } from './tables/tables.module';
import { MealsModule } from './meals/meals.module';

@Module({
  imports: [OrdersModule, AuthModule, UsersModule, TablesModule, MealsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
