import { Request, Response } from 'express';

import { ProductModel } from '../../models';

export const getProductsController = async (_: Request, res: Response) => {
  try {
    const documents = await ProductModel.find({});

    return res.status(200).json({
      message: null,
      success: true,
      statusCode: 200,
      data: documents,
    });
  } catch (err: any) {
    return res.status(404).json({
      message: err,
      success: false,
      statusCode: 400,
      data: null,
    });
  }
};
