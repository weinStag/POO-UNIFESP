import { Module } from '@nestjs/common';
import { ProviderResolver } from './provider.resolver';

@Module({
  providers: [ProviderResolver]
})
export class ProviderModule {}
