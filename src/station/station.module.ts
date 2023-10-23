import { Module } from '@nestjs/common';
import { StationResolver } from './station.resolver';

@Module({
    providers: [StationResolver],
})
export class StationModule {}
