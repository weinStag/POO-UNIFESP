import { StationTypeSchema } from '../schema/station-type.schema';
import { PrismaService } from '../../database/service/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StationTypeRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async find(stationId: string, typeId: string): Promise<StationTypeSchema> {
    return this.prismaService.station_type.findUnique({
      where: {
        stationId_typeId: {
          stationId: stationId,
          typeId: typeId,
        },
      },
    });
  }

  public async add(stationType: StationTypeSchema): Promise<void> {
    this.prismaService.station_type.create({ data: stationType });
  }

  public async remove(stationId: string, typeId: string): Promise<void> {
    this.prismaService.station_type.delete({
      where: {
        stationId_typeId: {
          stationId: stationId,
          typeId: typeId,
        },
      },
    });
  }

  public async list(): Promise<StationTypeSchema[]> {
    return this.prismaService.station_type.findMany();
  }

  public async update(newSationType: StationTypeSchema): Promise<void> {
    this.prismaService.station_type.update({
      where: {
        stationId_typeId: {
          stationId: newSationType.stationId,
          typeId: newSationType.typeId,
        },
      },
      data: newSationType,
    });
  }
}
