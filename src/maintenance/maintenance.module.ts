import { Module } from '@nestjs/common';
import { MaintenanceResolver } from './maintenance.resolver';

@Module({
  providers: [MaintenanceResolver]
})
export class MaintenanceModule {}
