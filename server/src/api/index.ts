import express from 'express';

import { createProductController } from './controllers/create';
import { deleteProductController } from './controllers/delete';
import {
  getProductController,
  getProductsController,
} from './controllers/read';
import { updateProductController } from './controllers/update';

const router = express.Router();

router.post('/create', createProductController);
router.get('/delete/:id', deleteProductController);
router.get('/read', getProductsController);
router.get('/read/:id', getProductController);
router.post('/update', updateProductController);

export default router;
