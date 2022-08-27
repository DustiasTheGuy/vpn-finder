import express from 'express';

import { indexController, outPageController } from './product';

const router = express.Router({ mergeParams: true });

router.get('/', indexController);
router.get('/:id', outPageController);

export const apiRouter = router;
