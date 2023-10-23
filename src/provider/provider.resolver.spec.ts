import { Test, TestingModule } from '@nestjs/testing';
import { ProviderResolver } from './provider.resolver';

describe('ProviderResolver', () => {
  let resolver: ProviderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderResolver],
    }).compile();

    resolver = module.get<ProviderResolver>(ProviderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
