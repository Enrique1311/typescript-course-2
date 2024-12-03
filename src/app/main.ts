import { faker } from '@faker-js/faker';

import { addProduct, products } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    title: faker.commerce.product(),
    price: parseInt(faker.commerce.price()),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    stock: faker.number.int({ min: 1, max: 100 }),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['A', 'B', 'C', 'D']),
    categoryId: faker.string.uuid(),
  });
}
console.log(products);
