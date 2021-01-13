import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';
import { ITeacher, TeacherModel } from '../models/teacher.model';

export interface ILesson extends Document {
  lessonName: string;
  lessonDayOfWeek: string;
  numberOfSemester: number;
  nameOfGroupStudents: string;
  lessonTime: string;
  chatIdLesson: string;
  emailTeacher: string;
  teacherId: Schema.Types.ObjectId;
  numberClassRoom: number;
  lastNameTeacher: string;
  //classRoomId: Schema.Types.ObjectId;
}

const LessonSchema: Schema = new Schema({
  lessonName: { type: String, required: true },
  lessonDayOfWeek: { type: String, required: true },
  numberOfSemester: { type: Number, required: true },
  nameOfGroupStudents: { type: String, required: true },
  lessonTime: { type: String, required: true },
  chatIdLesson: { type: String, required: true },
  emailTeacher: { type: String, required: true, unique: true },
  numberClassRoom: { type: Number, required: true, unique: true },
  teacherId: { type: Schema.Types.ObjectId, required: true, ref: 'TeacherModel' },
  //classRoomId: { type: Schema.Types.ObjectId, required: true, ref: 'ClassRoomModel' },
});

export const LessonModel = mongoose.model<ILesson>('Lesson', LessonSchema);
