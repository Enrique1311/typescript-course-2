// Asigna valores por defecto a los parámetros
const createProduct2 = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock,
    isNew,
  };
};

const product1 = createProduct2(1, true, 0);
console.log(product1);

const product2 = createProduct2(2, true);
console.log(product2);
