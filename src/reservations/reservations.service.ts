import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReservationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReservationDto: CreateReservationDto) {
    try {
      const create = await this.prisma.reservation.create({
        data: createReservationDto,
      });
      return create;
    } catch (e) {
      throw new InternalServerErrorException(
        'Reservation could not be created!' + e,
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.reservation.findMany();
    } catch (e) {
      throw new InternalServerErrorException(
        'Indexing reservations ERROR!' + e,
      );
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.reservation.findFirst({ where: { id: id } });
    } catch (e) {
      throw new InternalServerErrorException(
        'Reservation could not be found!' + e,
      );
    }
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    try {
      const updated = await this.prisma.reservation.update({
        where: { id: id },
        data: updateReservationDto,
      });
      return updated;
    } catch (e) {
      throw new InternalServerErrorException(
        'Reservation could not be updated!' + e,
      );
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.reservation.delete({ where: { id: id } });
    } catch (e) {
      throw new InternalServerErrorException(
        'Reservation could not be deleted!' + e,
      );
    }
  }
}
