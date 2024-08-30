import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { PrismaService } from 'src/prisma.service';

/**
 * The `PrismaService` class is a provider that handles the communication with the Prisma ORM.
 * It is used in the `TablesModule` to provide the `TablesService` with access to the database.
 */
@Module({
  controllers: [TablesController],
  providers: [TablesService, PrismaService],
})
export class TablesModule {}
