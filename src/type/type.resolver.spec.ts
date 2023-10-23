import { Test, TestingModule } from '@nestjs/testing';
import { TyperResolver } from './type.resolver';

describe('UserResolver', () => {
  let resolver: TyperResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TyperResolver],
    }).compile();

    resolver = module.get<TyperResolver>(TyperResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
