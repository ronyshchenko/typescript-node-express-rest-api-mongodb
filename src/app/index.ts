import * as express from 'express';
import { Request, Response, Application } from 'express';
import * as bodyParser from 'body-parser';

import { connect } from './connect';


const app: Application = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome!')
);

app.listen(port, () =>
  console.log(`Application was started on port ${port}.`)
);


const db = 'mongodb+srv://ronyshchenko:morimorovich@cluster0.gmarx.mongodb.net/test3';
connect({db});


