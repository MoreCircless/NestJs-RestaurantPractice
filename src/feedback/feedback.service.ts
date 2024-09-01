import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFeedbackDto: CreateFeedbackDto) {
    try {
      const create = await this.prisma.feedback.create({
        data: createFeedbackDto,
      });
      return create;
    } catch (e) {
      throw new InternalServerErrorException('User could not be created!' + e);
    }
  }

  async findAll() {
    try {
      return await this.prisma.feedback.findMany();
    } catch (e) {
      throw new InternalServerErrorException('Indexing users ERROR!' + e);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.feedback.findFirst({ where: { id: id } });
    } catch (e) {
      return `This action returns a #${id} feedback`;
    }
  }

  async update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    try {
      return await this.prisma.feedback.update({
        where: { id: id },
        data: updateFeedbackDto,
      });
    } catch (e) {
      throw new InternalServerErrorException('User could not be updated!' + e);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.feedback.delete({ where: { id: id } });
    } catch (e) {
      throw new InternalServerErrorException('User could not be deleted!' + e);
    }
  }
}
