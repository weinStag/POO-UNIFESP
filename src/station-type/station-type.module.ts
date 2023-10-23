import { Module } from '@nestjs/common';
import { StationTypeResolver } from './station-type.resolver';

@Module({
  providers: [StationTypeResolver],
})
export class StationTypeModule {}
