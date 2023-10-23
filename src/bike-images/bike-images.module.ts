import { Module } from '@nestjs/common';
import { BikeImagesResolver } from './bike-images.resolver';
import { BikeImagesRepository } from './repository/bike-images.repository';
import { PrismaService } from 'src/database/service/prisma.service';

@Module({
  providers: [BikeImagesResolver, BikeImagesRepository, PrismaService],
})
export class BikeImagesModule {}
