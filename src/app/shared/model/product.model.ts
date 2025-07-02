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

export interface checkoutData {
  quantity: number;
  id: number
}

export interface CartItem extends IProduct {
  cartQuantity: number; // Quantity in cart (different from product quantity)
}