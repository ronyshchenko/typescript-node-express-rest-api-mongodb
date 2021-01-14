import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

export interface ILesson extends Document {
  lessonName: string;
  lessonDayOfWeek: string;
  numberOfSemester: number;
  nameOfGroupStudents: string;
  lessonTime: number;
  chatIdLesson: string;
  teacherId: Schema.Types.ObjectId;
  classRoomId: Schema.Types.ObjectId;
}

const LessonSchema: Schema = new Schema({
  lessonName: { type: String, required: true },
  lessonDayOfWeek: { type: String, required: true },
  numberOfSemester: { type: Number, required: true },
  nameOfGroupStudents: { type: String, required: true },
  lessonTime: { type: Number, required: true },
  chatIdLesson: { type: String, required: true },
  teacherId:{ type: Schema.Types.ObjectId, ref: 'Teacher' },
  classRoomId: { type: Schema.Types.ObjectId, ref: 'Classroom' },
});

export const LessonModel = mongoose.model<ILesson>('Lesson', LessonSchema);
