import { Test, TestingModule } from '@nestjs/testing';
import { BikeImagesResolver } from './bike-images.resolver';

describe('BikeImagesResolver', () => {
  let resolver: BikeImagesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BikeImagesResolver],
    }).compile();

    resolver = module.get<BikeImagesResolver>(BikeImagesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
