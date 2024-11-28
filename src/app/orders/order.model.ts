import { BaseModel } from '../base.model';
import { Product } from '../products/product.model';
import { User } from '../users/user.model';

export interface Order extends BaseModel {
  product: Product[];
  user: User;
}
