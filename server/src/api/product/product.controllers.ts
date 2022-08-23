import { Request, Response } from 'express';

import { getProductById, getProducts } from './product.service';

export const getProductController = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params.id);
    return res.json({
      message: null,
      success: true,
      data: product,
    });
  } catch (err: any) {
    return res.json({
      message: err.message,
      success: false,
      data: null,
    });
  }
};

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    return res.json({
      message: null,
      success: true,
      data: products,
    });
  } catch (err: any) {
    return res.status(404).json({
      message: err.message,
      success: false,
      data: null,
    });
  }
};
