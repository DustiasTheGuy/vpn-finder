import { Request, Response } from 'express';

import { cutStr } from '../../utils';
import { getProducts } from './product.service';

export const getProductByIdController = async (req: Request, res: Response) => {
  return res.redirect('/');
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
