import { Request, Response } from 'express';

import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById,
} from './product.service';

export const createProductController = async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);

    return res.json({
      message: null,
      success: true,
      data: product,
    });
  } catch (err: any) {
    return res.status(400).json({
      message: err.message,
      success: false,
      data: null,
    });
  }
};

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    await deleteProductById(req.params.id);
    return res.json({
      message: null,
      success: true,
      statusCode: 200,
      data: null,
    });
  } catch (err: any) {
    return res.json({
      message: err.message,
      success: false,
      statusCode: 200,
      data: null,
    });
  }
};

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

export const getProductsController = async (_: Request, res: Response) => {
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

export const updateProductController = async (req: Request, res: Response) => {
  try {
    await updateProductById(req.params.id, req.body);
    res.json({
      message: null,
      success: true,
      data: null,
    });
  } catch (err: any) {
    res.json({
      message: err.message,
      success: false,
      data: null,
    });
  }
};
