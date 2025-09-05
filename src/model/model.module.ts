import { Module } from '@nestjs/common';
import { ModelResolver } from './model.resolver';

@Module({
  providers: [ModelResolver]
})
export class ModelModule {}
