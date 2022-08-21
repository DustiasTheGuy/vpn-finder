import { Request, Response } from 'express';

import { ProductModel } from '../../models';

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    return res.json({
      message: 'Product deleted',
      success: true,
      statusCode: 200,
      data: null,
    });
  } catch (err: any) {
    return res.json({
      message: err,
      success: false,
      statusCode: 200,
      data: null,
    });
  }
};
