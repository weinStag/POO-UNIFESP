import { Module } from '@nestjs/common';
import { StationTypeResolver } from './station-type.resolver';
import { StationTypeRepository } from './repository/station-type.repository';
import { PrismaService } from 'src/database/service/prisma.service';
import { StationResolver } from 'src/station/station.resolver';
import { TypeResolver } from 'src/type/type.resolver';
import { TypeRepository } from 'src/type/repository/type.repository';
import { StationRepository } from 'src/station/repository/station.repository';

@Module({
  providers: [
    StationTypeResolver,
    StationTypeRepository,
    PrismaService,
    TypeResolver,
    StationResolver,
    TypeRepository,
    StationRepository,
  ],
})
export class StationTypeModule {}
