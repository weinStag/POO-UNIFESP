import { Test, TestingModule } from '@nestjs/testing';
import { StationTypeResolver } from './station-type.resolver';

describe('UserResolver', () => {
  let resolver: StationTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationTypeResolver],
    }).compile();

    resolver = module.get<StationTypeResolver>(StationTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
