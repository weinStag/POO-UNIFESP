import { Module } from '@nestjs/common';
import { BikeImagesResolver } from './bike-images.resolver';

@Module({
  providers: [BikeImagesResolver],
})
export class BikeImagesModule {}
