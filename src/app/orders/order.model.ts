import { Product } from '../products/product.model';
import { User } from '../users/user.model';

export interface Order {
  id: number | string;
  createdAt: Date;
  product: Product[];
  user: User;
}