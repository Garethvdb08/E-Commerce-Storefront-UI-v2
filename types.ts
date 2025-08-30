
export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  tag?: 'New' | 'Sale' | 'Featured';
}

export interface Category {
  id: number;
  name: string;
  imageUrl: string;
}