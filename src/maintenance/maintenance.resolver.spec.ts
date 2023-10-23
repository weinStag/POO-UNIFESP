import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceResolver } from './maintenance.resolver';

describe('MaintenanceResolver', () => {
  let resolver: MaintenanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceResolver],
    }).compile();

    resolver = module.get<MaintenanceResolver>(MaintenanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
