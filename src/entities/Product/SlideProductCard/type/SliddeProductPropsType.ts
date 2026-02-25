import type { IProduct } from "@/entities/Model/Product";

export type SlideProductPropsType = Pick<
  IProduct,
  "imageUrl" | "name" | "price" | "description"
>;
