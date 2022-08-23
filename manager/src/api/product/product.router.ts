import express from 'express';

import {
  createProductController,
  deleteProductController,
  getProductController,
  getProductsController,
  updateProductController,
} from './product.controllers';

const router = express.Router();

router.post('/', createProductController);
router.delete('/:id', deleteProductController);
router.get('/', getProductsController);
router.get('/:id', getProductController);
router.put('/:id', updateProductController);

export const productRouter = router;
