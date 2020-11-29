import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Qcm } from './interfaces/qcm.interface';
@Injectable()
export class QcmService {
  constructor(
    @InjectModel('Qcm') private readonly qcmModel: Model<Qcm>,
  ) {}

  async addQcm(createQcmDTO: any): Promise<any> {
    const qcmsaved = new this.qcmModel(createQcmDTO);
    return await qcmsaved.save();
  }
}
