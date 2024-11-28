// * Hereda id, createdAt y updatedAt de BaseModel
import { BaseModel } from '../base.model';

export interface Category extends BaseModel {
  name: string;
}
