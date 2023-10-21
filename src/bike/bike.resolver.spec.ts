import { Test, TestingModule } from '@nestjs/testing';
import { BikeResolver } from './bike.resolver';

describe('BikeResolver', () => {
  let resolver: BikeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BikeResolver],
    }).compile();

    resolver = module.get<BikeResolver>(BikeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
