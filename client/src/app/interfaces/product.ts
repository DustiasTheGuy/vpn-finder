declare interface Feature {
    key: string;
    value: Array<string>;
}

declare interface OnSaleData {
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
    onSaleData: OnSaleData;
    features: Array<Feature>;
};