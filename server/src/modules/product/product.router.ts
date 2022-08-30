import express from 'express';

import {
  getProductByTitleController,
  getProductsController,
} from './product.controllers';

const router = express.Router();

router.get('/', getProductsController);
router.get('/:title', getProductByTitleController);

export const productRouter = router;
