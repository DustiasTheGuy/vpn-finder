import { Request, Response } from 'express';

import { cutStr } from '../../utils';
import { getProductByTitle, getProducts } from './product.service';

export const getProductByTitleController = async (
  req: Request,
  res: Response,
) => {
  try {
    if (!req.params.title) {
      return res.redirect('/');
    }

    const title = req.params.title.replace(/_/g, ' ');
    const product = await getProductByTitle(title);

    if (!product) {
      return res.redirect('/');
    }

    return res.render('pages/product', { product });
  } catch (err: any) {
    return res.render('/');
  }
};

export const getProductsController = async (_: Request, res: Response) => {
  try {
    const products = await getProducts();

    if (!products) {
      return res.render('/');
    }

    return res.render('pages/index', {
      products: products.map((product) => ({
        ...product,
        description: cutStr(product.description),
      })),
    });
  } catch (err: any) {
    return res.render('/');
  }
};
