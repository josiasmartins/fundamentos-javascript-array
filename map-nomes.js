let nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

// console.log(nomesAtualizados);


const names = "Alura";
let nomesMaiuscula = "";

for (let i = 0; i < names.length; i++) {
    nomesMaiuscula += names[i].toUpperCase();
};
console.log(nomesMaiuscula);

const nomeDoCurso = "Fundamentos de JS";
const nomePlataforma = " Alura";

const nomeCompleto = nomeDoCurso.concat(nomePlataforma);
console.log(nomeCompleto);