import { Module } from '@nestjs/common';
import { StationResolver } from './station.resolver';
import { PrismaService } from 'src/database/service/prisma.service';
import { StationRepository } from './repository/station.repository';

@Module({
  providers: [StationResolver, PrismaService, StationRepository],
})
export class StationModule {}
