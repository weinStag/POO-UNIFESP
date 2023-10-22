import { typeSchema } from "../schema/type.schema";
import { PrismaService } from './../../database/service/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeRepository{
    constructor(private readonly prismaService: PrismaService) {}
    
    public async find(id: string): Promise<typeSchema> {
        return this.prismaService.type.findUnique({ where: {id} });
    }

    public async add(newType: typeSchema): Promise<void> {
        this.prismaService.type.create({ data: newType });
    }

    public async remove(id: string): Promise<void> {
        this.prismaService.type.delete({ where: {id} });
    }

    public async list(): Promise<typeSchema[]> {
        return this.prismaService.type.findMany();
    }

    public async update(newType: typeSchema): Promise<void> {
        this.prismaService.type.update({ where: {id: newType.id}, data: newType })
    }
}