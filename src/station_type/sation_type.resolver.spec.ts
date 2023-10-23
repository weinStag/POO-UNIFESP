import { Test, TestingModule } from '@nestjs/testing';
import { Stn_typResolver } from './station_type.resolver';

describe('UserResolver', () => {
  let resolver: Stn_typResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Stn_typResolver],
    }).compile();

    resolver = module.get<Stn_typResolver>(Stn_typResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
