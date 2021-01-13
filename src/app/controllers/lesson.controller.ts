import { ILesson, LessonModel } from '../models/lesson.model';
import { ITeacher, TeacherModel } from '../models/teacher.model';

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
        return LessonModel.findById(id).populate('teacherId')
          .then((data: any) => {
            console.log(data.teacherId.lastNameTeacher)
            return data;
          })
          .catch((error: Error) => {
            throw error;
          })
        },

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