import { ProductModel } from './product.model';

export const getProductById = async (id: string) => {
  try {
    return await ProductModel.findOne({ _id: id });
  } catch (err) {
    return err;
  }
};

export const getProducts = async () => {
  try {
    return await ProductModel.find({});
  } catch (err) {
    return err;
  }
};
