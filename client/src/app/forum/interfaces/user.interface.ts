export interface User {
    _id: string;
    created: Date;
    email: string;
    imageURL: string;
    topics: any[];
    resetToken: null;
}