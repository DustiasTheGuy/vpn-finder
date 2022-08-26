import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import { apiRouter } from './api';
import { env } from './env';

const app = express();

mongoose.connect(env.MONGO_URI);

app.use(cors());
app.use(express.static('./public'));

app.use('/', apiRouter);

const port = env.NODE_ENV === 'production' ? 80 : env.NODE_PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
