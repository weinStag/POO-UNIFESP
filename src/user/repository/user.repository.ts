import { userSchema } from '../schema/user.schema';
import { PrismaService } from './../../database/service/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findByEmail(email: string): Promise<userSchema> {
    return this.prismaService.user.findUnique({ where: { email } });
  }
}
