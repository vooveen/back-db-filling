import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {QcmSchema} from './schema/qcm.schema'
import { QcmsController } from './qcms.controller';
import { QcmsService } from './qcms.service';

@Module({
  imports: [MongooseModule.forFeature([{name:'QcmSchema', schema: QcmSchema}]),],
  controllers: [QcmsController],
  providers: [QcmsService],
  exports:[QcmsService]
})
export class QcmsModule {}
