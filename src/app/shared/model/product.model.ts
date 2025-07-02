export interface IProduct {
  id: string;
  name: string;
  quantity: number;
  description: string;
  image: string;
}

export interface CheckoutData {
  statusCode: number;
  products: IProduct[];
}
