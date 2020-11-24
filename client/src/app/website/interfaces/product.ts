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
    active: boolean;
    priority: boolean;
    moneyBack: boolean;
    onSaleData: OnSaleData;
    features: Array<String>;
};