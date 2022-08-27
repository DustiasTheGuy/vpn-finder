import { Request, Response } from 'express';

import { cutStr } from '../../utils';
import { getProductById, getProducts } from './product.service';

export const getProductByIdController = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params.id);

    if (!product) {
      return res.render('pages/error');
    }

    return res.render('pages/outpage', { product });
  } catch (err: any) {
    return res.render('pages/error');
  }
};

export const getProductsController = async (_: Request, res: Response) => {
  try {
    const products = await getProducts();

    if (!products) {
      return res.render('pages/error');
    }

    return res.render('pages/index', {
      products: products.map((product) => ({
        ...product,
        description: cutStr(product.description),
      })),
    });
  } catch (err: any) {
    return res.render('pages/error');
  }
};
