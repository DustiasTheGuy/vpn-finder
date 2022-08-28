import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import { env } from './env';
import { productRouter } from './modules';

const app = express();

mongoose.connect(env.MONGO_URI);

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static('./public'));

app.use('/', productRouter);

const port = env.NODE_ENV === 'production' ? 80 : env.NODE_PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
