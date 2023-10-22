import { Module } from '@nestjs/common';
import { Stn_typResolver } from './station_type.resolver';

@Module({
    providers: [Stn_typResolver],
})
export class StationModule {}
