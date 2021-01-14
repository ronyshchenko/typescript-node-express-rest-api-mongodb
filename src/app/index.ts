import * as express from 'express';
import { Request, Response, Application } from 'express';
import * as bodyParser from 'body-parser';
import { TeacherController } from './controllers/teacher.controller';

import { connect } from './connect';

import { routes } from './routes';

const app: Application = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  const lesson = await TeacherController.getAllTeacher();
  return res.send(lesson);
})

app.listen(port, () =>
  console.log(`Application was started on port ${port}.`)
);


const db = 'mongodb+srv://ronyshchenko:test@cluster0.gmarx.mongodb.net/test3';
connect({db});

routes({ app })

