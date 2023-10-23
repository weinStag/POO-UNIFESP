import { Module } from '@nestjs/common';
import { TyperResolver } from './type.resolver';

@Module({
    providers: [TyperResolver],
})
export class StationModule {}
