import { addProduct } from './products/product.service';

addProduct({
  id: '1',
  title: 'Prod1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 30,
  size: 'L',
  category: {
    id: 20,
    name: 'Cat1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});
