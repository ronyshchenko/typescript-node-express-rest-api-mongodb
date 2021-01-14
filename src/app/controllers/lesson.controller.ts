import { ILesson, LessonModel } from '../models/lesson.model';
import { TeacherModel } from '../models/teacher.model';

interface ICreateLessonInput {
  lessonName: ILesson['lessonName'];
  lessonDayOfWeek: ILesson['lessonDayOfWeek'];
  numberOfSemester: ILesson['numberOfSemester'];
  nameOfGroupStudents: ILesson['nameOfGroupStudents'];
  lessonTime: ILesson['lessonTime'];
  chatIdLesson: ILesson['chatIdLesson'];
  teacherId: ILesson['teacherId'];
  classRoomId: ILesson['classRoomId'];
}

export const LessonController = {
  createLesson: async ({
    lessonName,
    lessonDayOfWeek,
    numberOfSemester,
    nameOfGroupStudents,
    lessonTime,
    chatIdLesson,
    teacherId,
    classRoomId
  }: ICreateLessonInput): Promise<ILesson> => {
    return LessonModel.create({
      lessonName,
      lessonDayOfWeek,
      numberOfSemester,
      nameOfGroupStudents,
      lessonTime,
      chatIdLesson,
      teacherId,
      classRoomId
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
          console.log(data)
          return data;
        })
        .catch((error: Error) => {
          throw error;
        })
      },

      getLessonById: async (id: string): Promise<ILesson> => {
        return LessonModel.findById(id)
          .then((data: any) => {
            console.log(data)
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
  
          return LessonModel.findByIdAndUpdate(id, {lessonName: "matem", lessonTime: 10})
            .then((data: ILesson) => {
              return data;
            })
            .catch((error: Error) => {
              throw error;
            })
          }  

}