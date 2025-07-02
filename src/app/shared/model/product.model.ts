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

// {
//     "name": "Practical Frozen Chips",
//     "quantity": 3,
//     "price": 15.99,
//     "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
//     "image": "https://picsum.photos/id/2/640/480",
//     "id": 2
// }