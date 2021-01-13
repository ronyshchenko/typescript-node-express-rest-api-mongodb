import { IUser, UserModel } from '../models/user.model';

interface ICreateUserInput {
  email: IUser['email'];
  firstName: IUser['firstName'];
  lastName: IUser['lastName'];
}

export const UserController = {
  createUser: async ({
    email,
    firstName,
    lastName
  }: ICreateUserInput): Promise<IUser> => {
    return UserModel.create({
      email,
      firstName,
      lastName
    })
      .then((data: IUser) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      })
    },

    getAllUser: async (): Promise<IUser> => {
      return UserModel.find({})
        .then((data: IUser) => {
          return data;
        })
        .catch((error: Error) => {
          throw error;
        })
      },

      findById: async (id: string): Promise<IUser> => {
        console.log(id) 
        return UserModel.findById(id)
          .then((data: IUser) => {
            return data;
          })
          .catch((error: Error) => {
            throw error;
          })
        },

      removeUserById: async (id: string): Promise<IUser> => {
        console.log(id) 

        return UserModel.findByIdAndRemove(id)
          .then((data: IUser) => {
            return data;
          })
          .catch((error: Error) => {
            throw error;
          })
        },

        updateUserById: async (id: string): Promise<IUser> => {
          console.log(id) 
  
          return UserModel.findByIdAndUpdate(id, {firstName: "Roma", lastName: "Onysh"})
            .then((data: IUser) => {
              return data;
            })
            .catch((error: Error) => {
              throw error;
            })
          }

}