import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

export interface IClassroom extends Document {
  numberClassRoom: string;
  nameClassRoom: string;
  numberFloorClassRoom: number;
  capacityClassRoom: number;
}

const ClassroomSchema: Schema = new Schema({
  numberClassRoom: { type: String, required: true },
  nameClassRoom: { type: String, required: true },
  numberFloorClassRoom: { type: Number, required: true },
  capacityClassRoom: { type: Number, required: true },
})

export const ClassroomModel = mongoose.model<IClassroom>('Classroom', ClassroomSchema);