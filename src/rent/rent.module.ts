import { Module } from '@nestjs/common';
import { RentResolver } from './rent.resolver';

@Module({
  providers: [RentResolver],
})
export class RentModule {}
