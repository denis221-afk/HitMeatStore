import type { IProduct } from "@/enteties/Model/Product";
type TSlideItem = Pick<IProduct, "id" | "description" | "imageUrl">;
export type ISlideItem = TSlideItem & {
  title: string;
  link: string;
};
