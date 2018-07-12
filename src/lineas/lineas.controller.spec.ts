import { Test, TestingModule } from '@nestjs/testing';
import { LineasController } from './lineas.controller';

describe('Lineas Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [LineasController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: LineasController = module.get<LineasController>(LineasController);
    expect(controller).toBeDefined();
  });
});
