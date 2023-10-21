import { Module } from '@nestjs/common';
import { BikeResolver } from './bike.resolver';
import { BikeRepository } from './repository/bike.repository';
import { PrismaService } from 'src/database/service/prisma.service';

@Module({
  providers: [BikeResolver, BikeRepository, PrismaService],
})
export class BikeModule {}
