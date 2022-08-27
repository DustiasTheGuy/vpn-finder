import { Request, Response } from 'express';

import { getProductById, getProducts } from './product.service';

export const outPageController = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params.id);

    console.log(product);

    if (!product) {
      return res.render('pages/error');
    }

    return res.render('pages/outpage', { product });
  } catch (err: any) {
    return res.render('pages/error');
  }
};

export const indexController = async (_: Request, res: Response) => {
  try {
    const products = await getProducts();

    if (!products) {
      return res.render('pages/error');
    }

    return res.render('pages/index', { products });
  } catch (err: any) {
    return res.render('pages/error');
  }
};
