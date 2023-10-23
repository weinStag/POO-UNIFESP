import { Module } from '@nestjs/common';
import { ModelProviderResolver } from './model-provider.resolver';

@Module({
  providers: [ModelProviderResolver]
})
export class ModelProviderModule {}
