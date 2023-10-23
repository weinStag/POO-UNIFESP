import { Injectable } from '@nestjs/common';
import { ModelSchema } from '../schema/model.schema';
import { PrismaService } from 'src/database/service/prisma.service';
import { ModelInput } from '../input/model.input';

@Injectable()
export class ModelRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async add(model: ModelInput): Promise<void> {
    this.prismaService.model.create({ data: model });
  }

  public async find(id: string): Promise<ModelSchema> {
    return this.prismaService.model.findUnique({ where: { id } });
  }

  public async list(): Promise<ModelSchema[]> {
    return this.prismaService.model.findMany();
  }

  public async remove(id: string): Promise<void> {
    this.prismaService.model.delete({ where: { id } });
  }

  public async update(model: ModelInput): Promise<void> {
    this.prismaService.model.update({ where: { id: model.id }, data: model });
  }
}
