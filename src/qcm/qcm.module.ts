import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QcmController } from './qcm.controller';
import { QcmService } from './qcm.service';
import { QcmSchema } from './schemas/qcm.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Qcm', schema: QcmSchema }]),
  ],
  providers: [QcmService],
  exports: [QcmService],
  controllers: [QcmController],
})
export class QcmModule {}
