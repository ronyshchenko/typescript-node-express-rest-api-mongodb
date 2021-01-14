import { ITeacher, TeacherModel } from '../models/teacher.model';
import { ILesson, LessonModel } from '../models/lesson.model';

let teacher: Array<String> = [];
let teacherStr: string;

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

    getTeacherByCondition: async (): Promise<ILesson> => {
      return LessonModel.find({lessonDayOfWeek:"thursday", lessonTime: {$gt : 8.5, $lt: 14.5}})
      .select('teacherId')
      .populate(
        'teacherId',
        'lastNameTeacher',
        {yearOfExpTeacher: {$gt : 10}, canTeachSubjects: {$eq : 'maths'}
      }).populate('classRoomId', 
        'nameClassRoom',
        {numberClassRoom: {$eq : '100'}}
      )
        .then((data: Array<100>) => {
          teacher.length=0;
          data.forEach((element: any) => {
            if(element.teacherId !== null && element.classRoomId !== null) {
              teacher.push(element.teacherId.lastNameTeacher)
            } 
          });
          console.log(teacher)
          return teacher;
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
  
          return TeacherModel.findByIdAndUpdate(id, {firstNameTeacher: "Roma", lastNameTeacher: "Onyshchenko"})
            .then((data: ITeacher) => {
              return data;
            })
            .catch((error: Error) => {
              throw error;
            })
          }

}