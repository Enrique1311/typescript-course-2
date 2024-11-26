// Si envío un string, recibo un array
// String => [S, t, r, i, n, g]

// Si envío un array, recibo un string
// [S, t, r, i, n, g] => String

// Sobrecarga que indica que si recibe un string devuelve un array y si recibe un array devuelve un string

export function parseString(input: string): string[]; // si resibe un string devuelve un array
export function parseString(input: string[]): string; // si recibe un array devuelve un string
export function parseString(input: number): boolean; // si recibe un number devuelve un boolean

// * Funciones de sobrecarga (Sólo funciona con funciones que comiences con "function"
// export function parseString(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }

// * La misma función pero más genérica
export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'number') {
    return false;
  }
}

const rtaArray = parseString('Martu');

// * Con la sobrecarga no debo validar si es array
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }

rtaArray.reverse();
console.log('String to array: ' + rtaArray);

const rtaString = parseString(['M', 'a', 'r', 't', 'u']);

// * Con la sobrecarga no debo validar si es string
// if (typeof rtaString === 'string') {
//   rtaString.toLowerCase();
// }

const rtaStringCopy = rtaString.toLowerCase();
console.log('Array to string: ' + rtaStringCopy);

const rtaBoolean = parseString(20);
console.log('Number to boolean: ' + rtaBoolean);
