type Review = {
  id: number;
  productId: Pick<IProduct, "id">;
  rating: number;
  comment: string;
};

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
  category: string;
  likes: number;
  orders: number;
  reviews: Review[];
}
