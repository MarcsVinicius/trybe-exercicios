let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem-vinda, " + info['personagem'])


  /* 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console */
  console.log("--------------")
  info['recorrente'] = 'sim';

  console.log(info)
  console.log("--------------")
/*3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console*/

for (let key in info) {
   console.log(key) 
}

console.log("-----------")

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console

for (let key in info) {
  console.log(info[key]) 
}

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = {
  personagem: 'Tio patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim',
}

for(let key in info){
  if(info[key] == info2[key]){
    console.log("Ambos concorrentes");
  }else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}