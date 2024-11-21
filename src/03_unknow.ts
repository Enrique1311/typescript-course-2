//* unknow: se le puede asignar cualquier tipo de valor (es mejor que "any")

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = 2;
unknowVar = 'Hello';
unknowVar = [];
unknowVar = {};

// * Para ejecutar un método se debe verificar el tipo de variable

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

// Para asignar un valor
if (typeof unknowVar === 'boolean') {
  let isNew: boolean = unknowVar;
}

// Con funciones
const parse = (str: string): unknown => {
  return JSON.parse(str);
};
