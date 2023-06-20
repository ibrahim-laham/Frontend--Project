export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
  images: string[];
}

export type fetchedData = {
  products: Product[],
  total: number,
  skip: number,
  limit: number
}

export type CartProduct = { title: string; price: number; };