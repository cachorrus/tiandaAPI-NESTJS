import { Test, TestingModule } from '@nestjs/testing';
import { OrdenesController } from './ordenes.controller';

describe('Ordenes Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [OrdenesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: OrdenesController = module.get<OrdenesController>(OrdenesController);
    expect(controller).toBeDefined();
  });
});
