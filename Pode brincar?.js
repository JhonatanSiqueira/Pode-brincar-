const pessoa = {
  nome: "josé",
  idade: 7,
  altura: 1.30
};

//altura mínima: 1.40
//idade mínima: 12

if (pessoa.idade >= 12 || pessoa.altura >= 1.40) {
    console.log(`${pessoa.nome} possui ${pessoa.idade} anos e ${pessoa.altura}m de altura. Pode brincar!`);  
  }
  else {
  console.log(`${pessoa.nome} não atende aos requisitos para brincar...`);
}  
 