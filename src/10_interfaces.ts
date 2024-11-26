type Sizes = 'S' | 'M' | 'L' | 'XL';

// * con type (se puede utilizar para definir sólo un tipo de valores)
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// };

// * con interface (cumple la misma función que type pero se diferencia de type, porque sólo se pueden definir varios valores)
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'Product 1',
  createdAt: new Date(),
  stock: 10,
  size: 'M',
});
