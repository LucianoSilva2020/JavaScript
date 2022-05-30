// Outra forma de utilizar este conceito é quando o nome
// da propriedade é coletado dinamicamente durante a execução
// do programa, como segue:
const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

