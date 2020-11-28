import { Test, TestingModule } from '@nestjs/testing';
import { QcmsService } from './qcms.service';

describe('QcmsService', () => {
  let service: QcmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QcmsService],
    }).compile();

    service = module.get<QcmsService>(QcmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
