import { Module, ValidationPipe } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TablesModule } from './tables/tables.module';
import { MealsModule } from './meals/meals.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [OrdersModule, AuthModule, UsersModule, TablesModule, MealsModule, FeedbackModule, ReservationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
