import * as mongoose from 'mongoose';

type OptionsType = {
  db: string;
}

export const connect = ({db}: OptionsType): void => {
  const connect = () => {
    mongoose
      .connect(
        db,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
        }
      )
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch(error => {
        console.error(`Error conecting to db: ${error.message}`);
        return process.exit(1);
      });
  };

  connect();

  mongoose.connection.on('disconnected', connect);
};