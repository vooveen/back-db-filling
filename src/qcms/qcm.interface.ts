import { Document } from 'mongoose';

export interface Qcm extends Document {
    cours: String;
}