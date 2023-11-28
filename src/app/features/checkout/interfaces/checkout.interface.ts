export interface ICheckOutForm {
    customerName: string;
    billingAddress: IAddress;
    shippingAddress: IAddress;
    paymentDetails: IPaymentDetails
}

export interface IPaymentDetails {
    ccNumber: string;
    expDate:  Date;
    cvcCode: string;
}

export interface IAddress {
    line1: string;
    line2: string;
    line3: string;
    state: string;
    postcode: string;
    country: string;
}