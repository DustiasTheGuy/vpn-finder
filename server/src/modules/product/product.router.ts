import express from 'express';

import {
  getProductByIdController,
  getProductsController,
} from './product.controllers';

const router = express.Router();

router.get('/', getProductsController);
router.get('/:id', getProductByIdController);

export const productRouter = router;
