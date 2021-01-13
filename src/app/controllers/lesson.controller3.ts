//import { ILesson, LessonModel } from '../models/lesson.model';
//import { ITeacher, TeacherModel } from '../models/teacher.model';

import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

interface ITeacher extends Document {
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
  emailTeacher: { type: String, required: true, unique: true },
  //lessonId: { type: Schema.Types.ObjectId, ref: 'LessonModel' },
  ageTeacher: { type: Number, required: true },
  sexTeacher: { type: String, required: true },
  yearOfExpTeacher: { type: Number, required: true },
  workedInUniverTeacher: { type: Boolean },
  canTeachSubjects: { type: Boolean },
});

const TeacherModel = mongoose.model<ITeacher>('Teacher', TeacherSchema);



interface ILesson extends Document {
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
  teacherId:[{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
  //classRoomId: { type: Schema.Types.ObjectId, required: true, ref: 'ClassRoomModel' },
});

const LessonModel = mongoose.model<ILesson>('Lesson', LessonSchema);


interface ICreateLessonInput {
  lessonName: ILesson['lessonName'];
  lessonDayOfWeek: ILesson['lessonDayOfWeek'];
  numberOfSemester: ILesson['numberOfSemester'];
  nameOfGroupStudents: ILesson['nameOfGroupStudents'];
  lessonTime: ILesson['lessonTime'];
  chatIdLesson: ILesson['chatIdLesson'];
  emailTeacher: ILesson['emailTeacher'];
  teacherId: ILesson['teacherId'];
  numberClassRoom: ILesson['numberClassRoom'];
  //classRoomId: ILesson['classRoomId'];
}

export const LessonController = {
  createLesson: async ({
    lessonName,
    lessonDayOfWeek,
    numberOfSemester,
    nameOfGroupStudents,
    lessonTime,
    chatIdLesson,
    emailTeacher,
    teacherId,
    numberClassRoom,
    //classRoomId
  }: ICreateLessonInput): Promise<ILesson> => {
    return LessonModel.create({
      lessonName,
      lessonDayOfWeek,
      numberOfSemester,
      nameOfGroupStudents,
      lessonTime,
      chatIdLesson,
      emailTeacher,
      teacherId,
      numberClassRoom,
      //classRoomId
    })
      .then((data: ILesson) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      })
    },

    getAllLesson: async (): Promise<ILesson> => {
      return LessonModel.find({})
        .then((data: ILesson) => {
          return data;
        })
        .catch((error: Error) => {
          throw error;
        })
      },


      getLessonById: async (id: string): Promise<ILesson> => {
        // console.log(id) 
         return LessonModel.findById(id).populate('teacherId' )
           .then((data: ILesson) => {
             console.log(data)
             return data;
           })
           .catch((error: Error) => {
             throw error;
           })
         },



      // getLessonById: async (id: string): Promise<ILesson> => {
      //  // console.log(id) 
      //   return LessonModel.findById(id).populate('lastNameTeacher' )
      //     .then((data: ILesson) => {
      //       console.log(data)
      //       return data;
      //     })
      //     .catch((error: Error) => {
      //       throw error;
      //     })
      //   },

      removeLessonById: async (id: string): Promise<ILesson> => {
        console.log(id) 

        return LessonModel.findByIdAndRemove(id)
          .then((data: ILesson) => {
            return data;
          })
          .catch((error: Error) => {
            throw error;
          })
        },

        updateLessonById: async (id: string): Promise<ILesson> => {
          console.log(id) 
  
          return LessonModel.findByIdAndUpdate(id, {lessonName: "matem", lessonTime: "10:10"})
            .then((data: ILesson) => {
              return data;
            })
            .catch((error: Error) => {
              throw error;
            })
          }  

}