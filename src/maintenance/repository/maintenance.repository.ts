import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/service/prisma.service';
import { MaintenanceInput } from '../input/maintenance.input';
import { MaintenanceSchema } from '../schema/maintenance.schema';

@Injectable()
export class MaintenanceRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async add(maintenance: MaintenanceInput): Promise<void> {
    await this.prismaService.maintenance.create({ data: maintenance });
  }

  public async find(id: string): Promise<MaintenanceSchema> {
    return this.prismaService.maintenance.findUnique({ where: { id } });
  }

  public async list(): Promise<MaintenanceSchema[]> {
    return this.prismaService.maintenance.findMany();
  }

  public async remove(id: string): Promise<void> {
    this.prismaService.maintenance.delete({ where: { id } });
  }

  public async update(maintenance: MaintenanceInput): Promise<void> {
    this.prismaService.maintenance.update({
      where: { id: maintenance.id },
      data: maintenance,
    });
  }
}
