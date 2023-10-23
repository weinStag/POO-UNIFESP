import { Test, TestingModule } from '@nestjs/testing';
import { TypeResolver } from './type.resolver';

describe('UserResolver', () => {
  let resolver: TypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeResolver],
    }).compile();

    resolver = module.get<TypeResolver>(TypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
