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
                afirmacao: "Viajar entre dimensões abriria portas para mundos paralelos, onde regras diferentes de realidade poderiam oferecer experiências totalmente novas e emocionantes."
            }
           
        ]
    },
    {
        enunciado: "Se houvesse um portal para um universo alternativo, qual versão de você mesmo você gostaria e encontrar?",
        alternativas: [
            {
                texto: "Uma versão mais ousada e aventureira.",
                afirmacao:"Encontrar uma versão mais ousada e aventureira de si mesmo traria inspiração para tomar decisões mais arrojadas e viver de forma mais intensa."
            },
            {
                texto: "uma versão mais calma e reflexiva.",
                afirmacao:"Encontrar uma versão mais calma e reflexiva permitiria aprender com a serenidade e o equilíbrio, desenvolvendo uma maior paz interior."
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
