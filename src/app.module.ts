import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QcmModule } from './qcm/qcm.module';
@Module({
  imports: [
    QcmModule,
    MongooseModule.forRoot('mongodb://localhost:27017/db'),
  ],
  controllers: [AppController],
  exports: [AppModule],
  providers: [AppService],
})
export class AppModule {}
