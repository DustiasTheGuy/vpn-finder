export interface User {
    _id: string;
    created: Date;
    email: string;
    imageURL: string;
    topics: any[];
    resetToken: null;
    countryOfResidence: string;
    dateOfBirth: Date;
    firstName: string;
    lastName: string;
    loginHistory: Login[];
    
}

declare interface Login {
    date: Date;
    ip: string;
}