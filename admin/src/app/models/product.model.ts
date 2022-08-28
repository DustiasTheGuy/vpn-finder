export interface Product {
  _id: string;
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
