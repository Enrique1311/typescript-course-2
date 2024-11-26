// Si envío un string, recibo un array
// String => [S, t, r, i, n, g]

// Si envío un array, recibo un string
// [S, t, r, i, n, g] => String

// * Funciones de sobrecarga (Sólo funciona con funciones que comiences con "function"
export function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rtaArray = parseString('Caro');

// Para trabajar de forma segura con el array debemos verificar que lo sea
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('String to array: ' + rtaArray);

const rtaString = parseString(['A', 'b', 'c', 'd', 'e']);

// Para trabajar de forma segura con el array debemos verificar que lo sea
if (typeof rtaString === 'string') {
  rtaString.toLowerCase();
}

console.log('Array to string: ' + rtaString);
