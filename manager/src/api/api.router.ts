import express from 'express';

import { productRouter } from './product';

const router = express.Router({ mergeParams: true });

router.use('/product', productRouter);

export const apiRouter = router;
