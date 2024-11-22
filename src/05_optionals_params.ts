// Los parámetros opcionales van al final (isNew?)
const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10, // si no viene, por defecto le asigna 10
    isNew: isNew ?? true, // si no viene, por defecto le asigna true
  };
};

const prod1 = createProduct(1, true, 0);
console.log(prod1);

const prod2 = createProduct(2, true);
console.log(prod2);
