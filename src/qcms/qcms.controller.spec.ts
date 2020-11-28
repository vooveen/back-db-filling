import { Test, TestingModule } from '@nestjs/testing';
import { QcmsController } from './qcms.controller';

describe('QcmsController', () => {
  let controller: QcmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QcmsController],
    }).compile();

    controller = module.get<QcmsController>(QcmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
