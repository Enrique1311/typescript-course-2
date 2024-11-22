//! El motor de inferencia de Typescript alerta cuando una función es infinita (never)

const withoutEnd = () => {
  while (true) {
    console.log('Infinito!');
  }
};

//----------------------------------------------------------------
//* Obliga a la función a detenerse
const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string!';
  } else if (Array.isArray(input)) {
    return 'Es un array!';
  }
  return fail('Stop!');
};

console.log(example('Hola!'));
console.log(example([1, 2, 3]));
console.log(example(124)); //! Se detiene
console.log(example('Luego del fail, no imprime'));
