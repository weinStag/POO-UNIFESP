import { Module } from '@nestjs/common';
import { RentResolver } from './rent.resolver';
import { PrismaService } from 'src/database/service/prisma.service';
import { RentRepository } from './repository/rent.repository';

@Module({
  providers: [RentResolver, PrismaService, RentRepository],
})
export class RentModule {}
