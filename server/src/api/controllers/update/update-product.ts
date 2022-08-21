import { Request, Response } from 'express';

import { ProductModel } from '../../models';

export const updateProductController = async (req: Request, res: Response) => {
  try {
    await ProductModel.findByIdAndUpdate({ _id: req.body._id }, req.body);
    res.json({
      message: 'Product has been updated',
      statusCode: 200,
      success: true,
      data: null,
    });
  } catch (err: any) {
    res.json({
      message: err,
      statusCode: 200,
      success: false,
      data: null,
    });
  }
};
