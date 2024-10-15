import { API_HOST } from "../config";
import { type ApiSearchResponse, type Data } from "../types";

export const searchData = async (search: string): Promise<[Error?, Data?]> => {
  try {
    const res = await fetch(`${API_HOST}/api/items?search=${search}`);

    if (!res.ok) {
      return [Error(`Error al buscar la información: ${res.statusText}`)];
    }

    const json = (await res.json()) as ApiSearchResponse;

    return [undefined, json.data];
  } catch (error) {
    if (error instanceof Error) {
      return [error];
    }
  }

  return [Error("Error desconocido")];
};
