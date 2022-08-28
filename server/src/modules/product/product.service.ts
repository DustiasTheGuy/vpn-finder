import { Product, ProductModel } from './product.model';

export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    return await ProductModel.findOne({ _id: id });
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getProducts = async (): Promise<Product[] | null> => {
  try {
    return await ProductModel.find({ draft: false }).lean().exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};
