import Joi from 'joi';
import mongoose from 'mongoose';

interface Product {
  title: string;
  description: string;
  image: string;
  affiliateUrl: string;
  hasFreeOption: boolean;
  draft: boolean;
  onSale: boolean;
  rating: number;
  discount: number;
  features: string[];
}

export const productSchema = Joi.object<Product, true>({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  affiliateUrl: Joi.string().uri().required(),
  hasFreeOption: Joi.boolean().valid(true, false).required(),
  draft: Joi.boolean().valid(true, false).required(),
  onSale: Joi.boolean().valid(true, false).required(),
  discount: Joi.number().min(0).max(100).required(),
  rating: Joi.number().integer().min(0).max(5).required(),
  features: Joi.array().items(Joi.string().required()).min(3).required(),
});

export const ProductModel = mongoose.model<Product>(
  'Product',
  new mongoose.Schema<Product>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    affiliateUrl: { type: String, required: true },
    hasFreeOption: { type: Boolean, required: true },
    draft: { type: Boolean, required: true },
    rating: { type: Number, required: true },
    onSale: { type: Boolean, required: true },
    discount: { type: Number, requird: true },
    features: [String],
  }),
);
