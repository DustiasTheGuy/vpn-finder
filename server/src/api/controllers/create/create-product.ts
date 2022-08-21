import { Request, Response } from 'express';

import { ProductModel } from '../../models';

export const createProductController = async (req: Request, res: Response) => {
  try {
    const product = new ProductModel({
      label: req.body.label,
      description: req.body.description,
      imageURL: req.body.imageURL,
      link: req.body.link,
      freeOption: req.body.freeOption,
      moneyBack: req.body.moneyBack,
      features: req.body.features,
    });
    await product.save();

    return res.status(200).json({
      message: 'Product has been saved',
      success: true,
      statusCode: 200,
      data: product,
    });
  } catch (err: any) {
    return res.status(400).json({
      message: err,
      success: false,
      statusCode: 400,
      data: null,
    });
  }
};
