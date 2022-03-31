const nomes = ['João', 'Renata', 'Daisy', 'Camilo', 'Ana', 'Caio'];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 1: ${sala2}`);

console.log(`tamanho do array: ${nomes.length}`)