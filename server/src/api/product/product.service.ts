import { ProductModel } from './product.model';

export const getProductById = async (id: string) => {
  try {
    const product = await ProductModel.findOne({ _id: id });
    return product;
  } catch (err) {
    return err;
  }
};

export const getProducts = async () => {
  try {
    return await ProductModel.find({}).select({ __v: 0 }).exec();
  } catch (err) {
    return err;
  }
};
