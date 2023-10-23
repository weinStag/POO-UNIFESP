import { Module } from '@nestjs/common';
import { MaintenanceResolver } from './maintenance.resolver';
import { MaintenanceRepository } from './repository/maintenance.repository';
import { PrismaService } from 'src/database/service/prisma.service';

@Module({
  providers: [MaintenanceResolver, MaintenanceRepository, PrismaService],
})
export class MaintenanceModule {}
