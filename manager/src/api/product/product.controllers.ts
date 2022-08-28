import { Request, Response } from 'express';

import { productSchema } from './product.model';
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById,
} from './product.service';

export const createProductController = async (req: Request, res: Response) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.json({
        message: error.message,
        success: false,
        data: null,
      });
    }

    const product = await createProduct(req.body);

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

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    await deleteProductById(req.params.id);
    return res.json({
      message: null,
      success: true,
      data: null,
    });
  } catch (err: any) {
    return res.json({
      message: err.message,
      success: false,
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

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    return res.json({
      message: null,
      success: true,
      data: products,
    });
  } catch (err: any) {
    return res.json({
      message: err.message,
      success: false,
      data: null,
    });
  }
};

export const updateProductController = async (req: Request, res: Response) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.json({
        message: error.message,
        success: false,
        data: null,
      });
    }

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
