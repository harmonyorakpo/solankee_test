export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  description: string;
  image: string;
}

export interface ProductResponse {
  statusCode: number;
  products: IProduct[];
}