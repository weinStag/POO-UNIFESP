import { Module } from '@nestjs/common';
import { TypeResolver } from './type.resolver';
import { PrismaService } from 'src/database/service/prisma.service';
import { TypeRepository } from './repository/type.repository';

@Module({
  providers: [TypeResolver, PrismaService, TypeRepository],
})
export class TypeModule {}
