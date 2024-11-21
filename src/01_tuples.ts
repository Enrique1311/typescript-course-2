// Array clásico
const prices: number[] = [1, 2, 3, 4];

// Tupla (Se debe espicificar entre llaves los tipos de datos que
// recibe y sólo acepta la cantidad y tipo de elementos designados)
let user: [string, number];
user = ['Enrique', 12];

let address: [string, number, string, boolean];
address = ['Ugarte', 4588, 'Palermo', true];

// Desestructuración de una tupla
const [street, number] = address;
console.log(street);
console.log(number);
