// Si envío un string, recibo un array
// String => [S, t, r, i, n, g]

// Si envío un array, recibo un string
// [S, t, r, i, n, g] => String

// Sobrecarga que indica que si recibe un string devuelve un array y si recibe un array devuelve un string
export function parseString(input: string): string[];
export function parseString(input: string[]): string;

// * Funciones de sobrecarga (Sólo funciona con funciones que comiences con "function"
export function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rtaArray = parseString('Caro');

// * Con la sobrecarga no debo validar si es array
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }

rtaArray.reverse();
console.log('String to array: ' + rtaArray);

const rtaString = parseString(['A', 'b', 'c', 'd', 'e']);

// * Con la sobrecarga no debo validar si es string
// if (typeof rtaString === 'string') {
//   rtaString.toLowerCase();
// }

rtaString.toLowerCase();
console.log('Array to string: ' + rtaString);
