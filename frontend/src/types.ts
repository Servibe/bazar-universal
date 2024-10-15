export interface ProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export type Data = ProductItem[];
export type ApiSearchResponse = {
  data: Data;
};
export type ApiProductDetail = {
  data: Data;
};
