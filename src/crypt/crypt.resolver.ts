import { Resolver } from '@nestjs/graphql';
import bcryptjs from 'bcryptjs';

@Resolver()
export class CryptResolver {
  private rounds = 10;

  constructor() {}

  async encrypt(plain: string): Promise<string> {
    return await bcryptjs.hash(plain, this.rounds);
  }

  async compare(plain: string, encrypted: string): Promise<boolean> {
    return await bcryptjs.compare(plain, encrypted);
  }
}
