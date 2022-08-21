interface OnSaleData {
  onSale: boolean;
  discount: number;
}

export interface Product {
  imageURL: string;
  label: string;
  description: string;
  link: string;
  freeOption: boolean;
  priority: boolean;
  new: boolean;
  active: boolean;
  moneyBack: boolean;
  onSaleData: OnSaleData;
  features: string[];
}
