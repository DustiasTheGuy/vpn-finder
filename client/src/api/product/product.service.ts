import axios from 'axios';

import { env } from '../../env';
import { cutStr } from '../../utils';

interface HttpResponse<T> {
  message: string | null;
  success: boolean;
  data: T;
}

export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const res = await axios.get<HttpResponse<Product>>(
      `${env.API_URL}/products/${id}`,
    );

    return res.data.data;
  } catch (err) {
    return null;
  }
};

export const getProducts = async (): Promise<Product[] | null> => {
  try {
    const res = await axios.get<HttpResponse<Product[]>>(
      `${env.API_URL}/products`,
    );

    return res.data.data.map((product) => ({
      ...product,
      description: cutStr(product.description),
    }));
  } catch (err) {
    return null;
  }
};
