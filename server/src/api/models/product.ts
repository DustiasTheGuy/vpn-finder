import mongoose from 'mongoose';

export const ProductModel = mongoose.model(
  'Product',
  new mongoose.Schema({
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: false,
      default: 0,
    },
    priority: {
      type: Boolean,
      default: false,
    },
    freeOption: {
      type: Boolean,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    moneyBack: {
      type: Boolean,
      required: true,
    },
    onSaleData: {
      onSale: {
        type: Boolean,
        default: false,
      },
      discount: {
        type: Number,
        default: 0,
      },
    },
    features: {
      type: Array,
      required: true,
    },
  }),
);
