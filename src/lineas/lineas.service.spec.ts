import { Test, TestingModule } from '@nestjs/testing';
import { LineasService } from './lineas.service';

describe('LineasService', () => {
  let service: LineasService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineasService],
    }).compile();
    service = module.get<LineasService>(LineasService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
