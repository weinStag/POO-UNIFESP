import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/service/prisma.service';
import { BikeSchema } from '../schema/bike.schema';

@Injectable()
export class BikeRepository {
  constructor(private prisma: PrismaService) {}

  public async find(id: string): Promise<BikeSchema> {
    return this.prisma.bike.findUnique({ where: { id } });
  }

  public async add(bike: BikeSchema): Promise<void> {
    this.prisma.bike.create({ data: bike });
  }

  public async remove(id: string): Promise<void> {
    this.prisma.bike.delete({ where: { id } });
  }

  public async list(): Promise<BikeSchema[]> {
    return this.prisma.bike.findMany();
  }

  public async update(bikeNew: BikeSchema): Promise<void> {
    this.prisma.bike.update({ where: { id: bikeNew.id }, data: bikeNew });
  }
}
