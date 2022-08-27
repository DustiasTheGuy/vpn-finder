import express from 'express';

import { apiRouter } from './api';
import { env } from './env';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use('/', apiRouter);

const port = env.NODE_ENV === 'production' ? 80 : env.NODE_PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
