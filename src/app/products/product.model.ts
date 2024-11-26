export type Sizes = 'S' | 'M' | 'L' | 'XL';
import { Category } from '../categories/category.model';

export interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
  category: Category;
}
