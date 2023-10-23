import { Module } from '@nestjs/common';
import { CryptResolver } from './crypt.resolver';

@Module({
  providers: [CryptResolver],
})
export class CryptModule {}
