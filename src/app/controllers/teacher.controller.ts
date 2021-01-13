import { ITeacher, TeacherModel } from '../models/teacher.model';
import {LessonModel, ILesson} from '../models/lesson.model'

interface ICreateTeacherInput {
  firstNameTeacher: ITeacher['firstNameTeacher'];
  surNameTeacher: ITeacher['surNameTeacher'];
  lastNameTeacher: ITeacher['lastNameTeacher'];
  emailTeacher: ITeacher['emailTeacher'];
  ageTeacher: ITeacher['ageTeacher'];
  sexTeacher: ITeacher['sexTeacher'];
  yearOfExpTeacher: ITeacher['yearOfExpTeacher'];
  workedInUniverTeacher: ITeacher['workedInUniverTeacher'];
  canTeachSubjects: ITeacher['canTeachSubjects'];
  //teacherId: ITeacher['teacherId'];
}

export const TeacherController = {
  createTeacher: async ({
    firstNameTeacher,
    surNameTeacher,
    lastNameTeacher,
    emailTeacher,
    ageTeacher,
    sexTeacher,
    yearOfExpTeacher,
    workedInUniverTeacher,
    canTeachSubjects,
    //teacherId
  }: ICreateTeacherInput): Promise<ITeacher> => {
    return TeacherModel.create({
      firstNameTeacher,
      surNameTeacher,
      lastNameTeacher,
      emailTeacher,
      ageTeacher,
      sexTeacher,
      yearOfExpTeacher,
      workedInUniverTeacher,
      canTeachSubjects
      //teacherId
    })
      .then((data: ITeacher) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      })
    },

    getAllTeacher: async (): Promise<ITeacher> => {
      return TeacherModel.find({})
        .then((data: ITeacher) => {
          return data;
        })
        .catch((error: Error) => {
          throw error;
        })
      },

      getTeacherById: async (id: string): Promise<ITeacher> => {
        console.log(id) 
        return TeacherModel.findById(id)
          .then((data: ITeacher) => {
            return data;
          })
          .catch((error: Error) => {
            throw error;
          })
        },

      removeTeacherById: async (id: string): Promise<ITeacher> => {
        console.log(id) 

        return TeacherModel.findByIdAndRemove(id)
          .then((data: ITeacher) => {
            return data;
          })
          .catch((error: Error) => {
            throw error;
          })
        },

        updateTeacherById: async (id: string): Promise<ITeacher> => {
          console.log(id) 
  
          return TeacherModel.findByIdAndUpdate(id, {firstNameTeacher: "Roma", lastNameTeacher: "Onysh"})
            .then((data: ITeacher) => {
              return data;
            })
            .catch((error: Error) => {
              throw error;
            })
          }

}