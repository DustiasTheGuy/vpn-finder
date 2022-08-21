import { Request, Response } from 'express';

import { ProductModel } from '../../models';

export const getProductController = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findOne({ _id: req.params.id });
    return res.status(200).json({
      message: null,
      status: 200,
      success: true,
      data: document,
    });
  } catch (err: any) {
    return res.json({
      message: 'You passed an invalid id',
      status: 400,
      success: false,
      data: null,
    });
  }
};
