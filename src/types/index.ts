export type Product = {
  name: string;
  price: number;
  image: string;
  carbohydrate: number;
  water: number;
  juice: number;
  description: string;
  rating: number;
  id: number;
};

export type CartProduct = Product & {
  quantity: number;
};
