/**
Essa é a forma mais comum de fazer um laço for entre as diversas linguagens
de programação. Utiliza-se um contador (i) para controlar o número de
execuções do laço.

Formato:
for(declaração do contador; condição para que o laço continue executando; incremento/decremento do contador)

O laço abaixo imprime os números ímpares entre 0 e 100. 
*/

for(let i = 0; i < 100; i++ ){
  if(i % 2 == 1){
    console.log(i);
  }
}
