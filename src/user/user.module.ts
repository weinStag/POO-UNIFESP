import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/database/service/prisma.service';
import { UserRepository } from './repository/user.repository';
import { CryptService } from 'src/crypt/crypt.service';
import { RentRepository } from 'src/rent/repository/rent.repository';

@Module({
  providers: [UserResolver, PrismaService, UserRepository, CryptService, RentRepository],
})
export class UserModule {}
