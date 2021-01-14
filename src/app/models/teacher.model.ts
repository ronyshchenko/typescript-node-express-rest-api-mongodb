import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

export interface ITeacher extends Document {
  firstNameTeacher: string;
  surNameTeacher: string;
  lastNameTeacher: string;
  emailTeacher: string;
  ageTeacher: number;
  sexTeacher: string;
  yearOfExpTeacher: number;
  workedInUniverTeacher: boolean;
  canTeachSubjects: string;
  //lessonId: Schema.Types.ObjectId; 
}

const TeacherSchema: Schema = new Schema({
  firstNameTeacher: { type: String, required: true },
  surNameTeacher: { type: String, required: true },
  lastNameTeacher: { type: String, required: true },
  emailTeacher: { type: String, required: true },
  //lessonId: { type: Schema.Types.ObjectId, ref: 'LessonModel' },
  ageTeacher: { type: Number, required: true },
  sexTeacher: { type: String, required: true },
  yearOfExpTeacher: { type: Number, required: true },
  workedInUniverTeacher: { type: Boolean },
  canTeachSubjects: { type: String },
});

export const TeacherModel = mongoose.model<ITeacher>('Teacher', TeacherSchema);