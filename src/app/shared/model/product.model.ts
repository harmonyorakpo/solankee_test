interface Product {
  id: string;
  name: string;
  quantity: number;
  description: string;
  image: string;
}

interface CheckoutData {
  statusCode: number;
  products: Product[];
}