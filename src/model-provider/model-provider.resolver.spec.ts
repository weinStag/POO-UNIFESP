import { Test, TestingModule } from '@nestjs/testing';
import { ModelProviderResolver } from './model-provider.resolver';

describe('ModelProviderResolver', () => {
  let resolver: ModelProviderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModelProviderResolver],
    }).compile();

    resolver = module.get<ModelProviderResolver>(ModelProviderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
