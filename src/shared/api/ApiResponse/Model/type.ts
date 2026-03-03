export type ApiResponsse<T> = {
  data: T;
  status: number;
  message: string;
};
