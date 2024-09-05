const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se você pudesse viajar no tempo, qual época você escolheria visitar?",
        alternativas: [
            {
                texto: "Passado",
                afirmacao: "Viajar ao passado permitiria testemunhar eventos históricos e descobrir segredos que moldaram o mundo como conhecemos."
            },
            {
                texto: "Futuro",
                afirmacao: "Viajar para o futuro permitiria explorar tecnologias avançadas e ver como a humanidade evoluiu, descobrindo inovações que poderiam transformar a vida."
            }
           
        ]
    },
    {
        enunciado: "Em uma realidade alternativa, qual habilidade especial você preferiria ter?",
        alternativas: [
            {
                texto: "Controlar o tempo",
                afirmacao: "Controlar o tempo permitiria pausar momentos importantes, acelerar situações monótonas e até revisitar acontecimentos para mudá-los"
            },
            {
                texto: "Viajar entre dimensões",
                afirmacao: "afirmacao4"
            }
           
        ]
    },
    {
        enunciado: "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",
        alternativas: [
            {
                texto: "Defendendo políticas públicas que subsidiem a energia solar para famílias de baixa renda.",
                afirmacao:"afirmacao5"
            },
            {
                texto: "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
                afirmacao:"afirmacao6"
            }
        ]
    }
];

let atual = 0;
let peguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.lenght){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas ();
}

function mostraAlternativas () {
    for (const alternativa of perguntaAtual.alternatvas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener ("click", ()=> respostaSelecionada(altenativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada (opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal=+ afirmacao + " ";
    atual++
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent= "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
    mostraPergunta ();