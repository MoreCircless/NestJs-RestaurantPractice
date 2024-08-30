import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TablesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTableDto: CreateTableDto) {
    return this.prisma.table.create({ data: createTableDto });
  }

  async findAll() {
    return await this.prisma.table.findMany();
  }

  async findOne(id: number) {
    const findTable = await this.prisma.table.findUnique({ where: { id: id } });
    if (!findTable) {
      return 'Table not found!';
    }
    return findTable;
  }

  async update(id: number, updateTableDto: UpdateTableDto) {
    try {
      return await this.prisma.table.update({
        where: { id: id },
        data: updateTableDto,
      });
    } catch (e) {
      throw new InternalServerErrorException('Table cannot be updated');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.table.delete({
        where: { id },
        select: { id: true },
      });
    } catch (e) {
      throw new InternalServerErrorException('Table cannot be deleted!');
    }
  }
}
