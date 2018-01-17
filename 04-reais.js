/**
Exemplo de funcionamento dos métodos 'toFixed' do número e 'replace' da string.

A função transforma um número em uma string no formato brasileiro de moeda.
*/

function formatarEmReais(umNumero){
  let numeroFormatado = umNumero.toFixed(2);
  numeroFormatado = numeroFormatado.replace('.', ',');
  numeroFormatado = `R$ ${numeroFormatado}`;

  return numeroFormatado;
}

console.log(formatarEmReais(20000));
console.log(formatarEmReais(25000));
