import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MealsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMealDto: CreateMealDto) {

    try{
      
      const newMeal =  await this.prisma.meals.create({ data: createMealDto });
      return newMeal;
    }
    
    catch(e){
     throw new InternalServerErrorException("Meal could not be created!");
    }

    
    
    
  }

  async findAll() {
    return await this.prisma.meals.findMany();
  }

  async findOne(id: number) {
    return `This action returns a #${id} meal`;
  }

  async update(id: number, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  async remove(id: number) {
    return `This action removes a #${id} meal`;
  }
}
