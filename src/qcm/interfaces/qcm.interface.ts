import { Document } from 'mongoose';

export interface Qcm extends Document {
  source: string;
}
