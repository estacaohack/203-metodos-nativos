/**
Exemplo de funcionamento dos métodos nativos dos vetores 'push' e 'pop'.
*/
let numeros = [1, 4, 7, 9];

numeros.push(73);

console.log(numeros);

let numeroPopado = numeros.pop();
console.log(numeroPopado);

numeros.pop();
numeros.pop();

console.log(numeros);
console.log(numeros.length);
