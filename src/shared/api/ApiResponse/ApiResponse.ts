import type { ApiResponsse } from "./Model/type";

export const ApiResponse = async <T>(url: string): Promise<ApiResponsse<T>> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: ApiResponsse<T> = await response.json();

  return data;
};
