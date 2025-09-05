import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/service/prisma.service';
import { ModelProviderSchema } from '../schema/model-provider.schema';
import { ModelProviderInput } from '../input/model-provider.input';

@Injectable()
export class ModelProviderRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async add(modelProvider: ModelProviderInput): Promise<void> {
    this.prismaService.model_provider.create({ data: modelProvider });
  }

  public async find(id: string, modelId: string, providerId: string): Promise<ModelProviderSchema> {
    return this.prismaService.model_provider.findUnique({ where: { id, modelId, providerId } });
  }

  public async list(): Promise<ModelProviderSchema[]> {
    return this.prismaService.model_provider.findMany();
  }

  public async remove(id: string): Promise<void> {
    this.prismaService.model_provider.delete({ where: { id } });
  }

  public async update(modelProvider: ModelProviderInput): Promise<void> {
    this.prismaService.model_provider.update({ where: { id: modelProvider.id }, data: modelProvider });
  }
}
