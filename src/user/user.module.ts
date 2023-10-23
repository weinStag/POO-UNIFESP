import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/database/service/prisma.service';
import { UserRepository } from './repository/user.repository';

@Module({
  providers: [UserResolver, PrismaService, UserRepository],
})
export class UserModule {}
