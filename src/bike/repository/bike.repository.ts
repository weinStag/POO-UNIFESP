import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/service/prisma.service';
import { BikeSchema } from '../schema/bike.schema';
import { BikeInput } from '../input/bike.input';

@Injectable()
export class BikeRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async find(id: string): Promise<BikeSchema> {
    return this.prismaService.bike.findUnique({ where: { id } });
  }

  public async add(bike: BikeInput): Promise<void> {
    this.prismaService.bike.create({ data: bike });
  }

  public async remove(id: string): Promise<void> {
    this.prismaService.bike.delete({ where: { id } });
  }

  public async list(): Promise<BikeSchema[]> {
    return this.prismaService.bike.findMany();
  }

  public async update(bikeNew: BikeInput): Promise<void> {
    this.prismaService.bike.update({ where: { id: bikeNew.id }, data: bikeNew });
  }
}
