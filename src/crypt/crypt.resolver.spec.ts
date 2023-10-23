import { Test, TestingModule } from '@nestjs/testing';
import { CryptResolver } from './crypt.resolver';

describe('CryptResolver', () => {
  let resolver: CryptResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptResolver],
    }).compile();

    resolver = module.get<CryptResolver>(CryptResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
