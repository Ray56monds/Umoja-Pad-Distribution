import { Test, TestingModule } from '@nestjs/testing';
import { DistributioneventService } from './distributionevent.service';

describe('DistributioneventService', () => {
  let service: DistributioneventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistributioneventService],
    }).compile();

    service = module.get<DistributioneventService>(DistributioneventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
