import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';

import { env } from './env';
import { productRouter } from './modules';

const app = express();

mongoose.connect(env.MONGO_URI);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 250,
  standardHeaders: true,
  legacyHeaders: false,
});

app.set('view engine', 'ejs');
app.use(limiter);
app.use(cors());
app.use(express.static('./public'));

app.use('/', productRouter);

const port = env.NODE_ENV === 'production' ? 80 : env.NODE_PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
