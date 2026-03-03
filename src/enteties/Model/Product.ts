type Review = {
  id: number;
  productId: IProduct["id"];
  rating: number;
  comment: string;
};

type Category = "Джерки" | "Пивчики" | "Снеки" | "Кабаноси";

type Taste =
  | "Классический"
  | "Острый"
  | "Сырный"
  | "Барбекю"
  | "Курочка"
  | "Говядина"
  | "Свинина";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  weight: number;
  rating: number;
  category: Category;
  taste: Taste;
  likes: number;
  orders: number;
  reviews: Review[];
}
