import { Test, TestingModule } from '@nestjs/testing';
import { RentResolver } from './rent.resolver';

describe('RentResolver', () => {
  let resolver: RentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentResolver],
    }).compile();

    resolver = module.get<RentResolver>(RentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
