import { Module } from '@nestjs/common';
import { RentResolver } from './rent.resolver';
import { PrismaService } from 'src/database/service/prisma.service';
import { RentRepository } from './repository/rent.repository';
import { UserResolver } from 'src/user/user.resolver';
import { BikeResolver } from 'src/bike/bike.resolver';
import { UserRepository } from 'src/user/repository/user.repository';
import { CryptService } from 'src/crypt/crypt.service';
import { BikeRepository } from 'src/bike/repository/bike.repository';

@Module({
  providers: [
    RentResolver,
    PrismaService,
    RentRepository,
    UserResolver,
    BikeResolver,
    UserRepository,
    CryptService,
    BikeRepository,
  ],
})
export class RentModule {}
