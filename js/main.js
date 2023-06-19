// Variável com todos os botões de equipamentos
const botaoAjusteEquipamentos = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// Identificação do clique na página
botaoAjusteEquipamentos.forEach( (botaoAjuste) => {
    botaoAjuste.addEventListener('click', (evento) => {
        ajustaValorEquipamento(evento.target.parentElement, evento.target.dataset.controle);
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.textContent);
    });
});

// Evento de alteração dos valores
function ajustaValorEquipamento (equipamento, ajuste) {
    const peca = equipamento.querySelector('[data-contador]'); // Definição da peça correta

    if (ajuste === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else if (ajuste === "+") {
        peca.value = parseInt(peca.value) + 1;
    } else {
        console.log("Nenhuma opção identificada.");
    }
}

// Evento de reclaculo das Estatísticas
function atualizaEstatisticas (peca, sentidoAjuste) {
    estatisticas.forEach( (estatisticaUnica) => {
        if (sentidoAjuste === '+') {
            estatisticaUnica.textContent = parseInt(estatisticaUnica.textContent) + pecas[peca][estatisticaUnica.dataset.estatistica];
        }
        else if (sentidoAjuste === '-') {
            estatisticaUnica.textContent = parseInt(estatisticaUnica.textContent) - pecas[peca][estatisticaUnica.dataset.estatistica];
        }
    });
}