import { API_HOST } from "../config";
import { type ApiProductDetail, type Data } from "../types";

export const productDetail = async (
  productId: number
): Promise<[Error?, Data?]> => {
  try {
    const res = await fetch(`${API_HOST}/api/items/${productId}`);

    if (!res.ok) {
      return [Error("Producto no encontrado")];
    }

    const json = (await res.json()) as ApiProductDetail;

    return [undefined, json.data];
  } catch (error) {
    if (error instanceof Error) {
      return [error];
    }
  }

  return [Error("Error desconocido")];
};
