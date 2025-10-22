export interface Product {
  _id?: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'cafea' | 'ceai' | 'desert' | 'snack' | 'altceva';
  featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
