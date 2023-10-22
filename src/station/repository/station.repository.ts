import { stationSchema } from '../schema/station.schema'
import { PrismaService } from './../../database/service/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StationRepository{
    constructor(private readonly prismaService: PrismaService) {}
    public async find(id: string): Promise<stationSchema>{
        return this.prismaService.station.findUnique({ where: {id} });
    }

    public async add(station: stationSchema): Promise<void>{
        this.prismaService.station.create({ data: station });
    }

    public async remove(id: string): Promise<void>{
        this.prismaService.station.delete({ where: {id} });
    }

    public async list(): Promise<stationSchema[]>{
        return this.prismaService.station.findMany();
    }

    public async update(newStation: stationSchema): Promise<void> {
        this.prismaService.station.update({ where: {id: newStation.id }, data: newStation });
    }
}