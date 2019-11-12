import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import cepController from './controllers/cepController';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

cepController(app);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

export default app;