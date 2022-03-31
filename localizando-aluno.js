const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediasDosAlunos = [10, 7, 9, 6];

// includes => boolenao;
// indexOf => 3

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeAluno)) {
        indice = listaDeNotasEAlunos[0].indexOf(nomeAluno);
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("nemo"))