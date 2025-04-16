const form = document.getElementById("atividade");
const imgAprovado = '<img src="./img/aprovado.png" alt="Emoji feliz" />';
const imgReprovado = '<img src="./img/reprovado.png" alt="Emoji triste" />';
const atividade = [];
const nota = [];

const spanAprovado = '<span class="resultadoAprovado">Aprovado</span>';
const spanReprovado = '<span class="resultadoReprovado">Reprovado</span>';
const NotaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionarLinha();
    atualizarTabelas();
    atualizarNotasFinais();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`A atividade "${inputNomeAtividade.value}" já foi inserida!`);
        return;
    }

    atividade.push(inputNomeAtividade.value);
    nota.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= NotaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabelas() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarNotasFinais() {
    const mediaFinal = NotasFinais();

    document.getElementById("MediaFinalValor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("MediaFinalResultado").innerHTML =
        mediaFinal >= NotaMinima ? spanAprovado : spanReprovado;
}

function NotasFinais() {
    let somaDasNotas = 0;
    for (let i = 0; i < nota.length; i++) {
        somaDasNotas += nota[i];
    }

    return somaDasNotas / nota.length;
}