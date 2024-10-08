import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Roles(Role.ADMIN)
  create(@Body() createTableDto: CreateTableDto) {
    return this.tablesService.create(createTableDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.tablesService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.tablesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto) {
    return this.tablesService.update(+id, updateTableDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.tablesService.remove(+id);
  }
}
