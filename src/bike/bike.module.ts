import { Module } from '@nestjs/common';
import { BikeResolver } from './bike.resolver';

@Module({
  providers: [BikeResolver],
})
export class BikeModule {}
