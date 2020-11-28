import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Qcm } from './qcm.interface';
@Injectable()
export class QcmsService {
    constructor(@InjectModel('Qcm') private readonly qcmModel : Model <Qcm>) {}
}
