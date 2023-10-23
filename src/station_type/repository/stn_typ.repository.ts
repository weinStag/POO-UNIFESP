import { stn_typSchema } from "../schema/stn_typ.schema";
import { PrismaService } from './../../database/service/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Stn_typRepository{
    constructor(private readonly prismaService: PrismaService) {}
    
    public async find(stationId: string, typeId: string): Promise<stn_typSchema>{
        return this.prismaService.stn_typ.find({ where: {stn_id: stationId, type_id: typeId} });
    }

    public async add(stationType: stn_typSchema): Promise<void> {
        this.prismaService.stn_typ.create({ data: stationType });
    }

    public async remove(stationId: string, typeId: string): Promise<void> {
        this.prismaService.stn_typ.delete({ where: {stn_id: stationId, typ_id: typeId} });
    }

    public async list(): Promise<stn_typSchema[]> {
        return this.prismaService.stn_typ.findMany();
    }

    public async update(newSationType: stn_typSchema): Promise<void> {
        this.prismaService.stn_typ.update({ where: {stn_id: newSationType.stn_id, type_id: newSationType.type_id}, data: newSationType})
    }
}