import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import { apiRouter } from './api';
import { env } from './env';

const app = express();

mongoose.connect(env.MONGO_URI);

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('./public'));

app.use('/', apiRouter);

app.listen(env.NODE_PORT, () => {
  console.log(`Server started on port ${env.NODE_PORT}...`);
});
