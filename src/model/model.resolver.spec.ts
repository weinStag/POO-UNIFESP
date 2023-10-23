import { Test, TestingModule } from '@nestjs/testing';
import { ModelResolver } from './model.resolver';

describe('ModelResolver', () => {
  let resolver: ModelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModelResolver],
    }).compile();

    resolver = module.get<ModelResolver>(ModelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
