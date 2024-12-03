import { Product } from './product.model';

// Omit: omite los campos que no necesite
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Pick: elige los campos que yo quiera que se incluyan
type example = Pick<Product, 'color' | 'description'>;

// Partial: genera otro tipo (de Product) con los campos opcionales.
// Como si los hubiésemos tipado con "?"
export interface UpdateProductDto extends Partial<CreateProductDto> {}
