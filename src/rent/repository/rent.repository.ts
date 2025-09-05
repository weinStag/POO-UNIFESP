import { RentInput } from './../input/rent.input';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/service/prisma.service';
import { RentSchema } from '../schema/rent.schema';

@Injectable()
export class RentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async add(rent: RentSchema): Promise<void> {
    const rentInput = new RentInput(rent.bike.id, rent.user.id, rent.station.id, new Date());
    this.prismaService.rent.create({ data: rentInput });
  }

  public async findOpen(bikeId: string, userId: string): Promise<RentSchema> {
    return this.prismaService.rent.findFirst({ where: { bikeId, userId, endDate: null } });
  }

  public async update(rent: RentInput): Promise<void> {
    this.prismaService.rent.update({ where: { id: rent.id }, data: rent });
  }

  public async findOpenRentsFor(userId: string): Promise<RentSchema[]> {
    return this.prismaService.rent.findMany({ where: { userId, endDate: null } });
  }

  public async find(id: string): Promise<RentSchema> {
    return this.prismaService.rent.findUnique({ where: { id } });
  }

  public async list(): Promise<RentSchema[]> {
    return this.prismaService.rent.findMany();
  }

  public async remove(id: string): Promise<void> {
    this.prismaService.rent.delete({ where: { id } });
  }
}
