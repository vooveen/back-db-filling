import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {QcmSchema} from './qcms/schema/qcm.schema'
import { QcmsModule } from './qcms/qcms.module';

@Module({
  imports: [
    QcmsModule,
    MongooseModule.forRoot('mongodb://vooveen:vooveen@localhost:27017/db')],
  controllers: [AppController],
  exports:[AppModule],
  providers: [AppService],
})
export class AppModule {}
