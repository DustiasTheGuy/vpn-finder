import { ProductModel } from './product.model';

export const createProduct = async (data: any) => {
  try {
    const newProduct = { ...data };

    const product = new ProductModel(newProduct);
    await product.save();

    return product.id;
  } catch (err) {
    return err;
  }
};

export const deleteProductById = async (id: string) => {
  try {
    await ProductModel.findByIdAndDelete(id);
    return null;
  } catch (err) {
    return err;
  }
};

export const updateProductById = async (id: string, data: any) => {
  try {
    await ProductModel.findByIdAndUpdate({ _id: id }, data);
    return;
  } catch (err) {
    return err;
  }
};

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
    const products = await ProductModel.find({})
      .select({ image: 0, __v: 0 })
      .exec();
    return products;
  } catch (err) {
    return err;
  }
};
