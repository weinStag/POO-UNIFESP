import { Injectable } from '@nestjs/common';
import { ProviderInput } from '../input/provider.input';
import { PrismaService } from 'src/database/service/prisma.service';
import { ProviderSchema } from '../schema/provider.schema';

@Injectable()
export class ProviderRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async add(provider: ProviderInput): Promise<void> {
    this.prismaService.provider.create({ data: provider });
  }

  public async find(id: string): Promise<ProviderSchema> {
    return this.prismaService.provider.findUnique({ where: { id } });
  }

  public async list(): Promise<ProviderSchema[]> {
    return this.prismaService.provider.findMany();
  }

  public async remove(id: string): Promise<void> {
    this.prismaService.provider.delete({ where: { id } });
  }

  public async update(provider: ProviderInput): Promise<void> {
    this.prismaService.provider.update({ where: { id: provider.id }, data: provider });
  }
}
