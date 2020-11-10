declare interface Feature {
    key: string;
    value: Array<string>;
}

export interface Product {
    imageURL: string;
    label: string;
    description: string;
    link: string;
    features: Array<Feature>;
};