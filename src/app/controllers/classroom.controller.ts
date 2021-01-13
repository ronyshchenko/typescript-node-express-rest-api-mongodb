import { IClassroom, ClassroomModel } from '../models/Classroom.model';

interface ICreateClassroomInput {
  numberClassRoom: IClassroom['numberClassRoom'];
  nameClassRoom: IClassroom['nameClassRoom'];
  numberFloorClassRoom: IClassroom['numberFloorClassRoom'];
  capacityClassRoom: IClassroom['capacityClassRoom'];
  //classRoomId: IClassroom['classRoomId'];
}

export const ClassroomController = {
  createClassroom: async ({
    numberClassRoom,
    nameClassRoom,
    numberFloorClassRoom,
    capacityClassRoom,
    //classRoomId
  }: ICreateClassroomInput): Promise<IClassroom> => {
    return ClassroomModel.create({
      numberClassRoom,
      nameClassRoom,
      numberFloorClassRoom,
      capacityClassRoom,
      //classRoomId
    })
      .then((data: IClassroom) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      })
    },

    getAllClassroom: async (): Promise<IClassroom> => {
      return ClassroomModel.find({})
        .then((data: IClassroom) => {
          return data;
        })
        .catch((error: Error) => {
          throw error;
        })
      },

      getClassroomById: async (id: string): Promise<IClassroom> => {
        console.log(id) 
        return ClassroomModel.findById(id)
          .then((data: IClassroom) => {
            return data;
          })
          .catch((error: Error) => {
            throw error;
          })
        },

      removeClassroomById: async (id: string): Promise<IClassroom> => {
        console.log(id) 

        return ClassroomModel.findByIdAndRemove(id)
          .then((data: IClassroom) => {
            return data;
          })
          .catch((error: Error) => {
            throw error;
          })
        },

        updateClassroomById: async (id: string): Promise<IClassroom> => {
          console.log(id) 
  
          return ClassroomModel.findByIdAndUpdate(id, {nameClassRoom: "wwOnysh"})
            .then((data: IClassroom) => {
              return data;
            })
            .catch((error: Error) => {
              throw error;
            })
          }  

}