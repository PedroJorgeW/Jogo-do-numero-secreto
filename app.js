let listaDeNumerosSorteados = [];
let numeroLimite = 40;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML ="Escolha um número entre 1 e 40" ;

function exibirMensagemInicial () {
    exibirTextoNatela("h1","Jogo do número secreto" );
    exibirTextoNatela("p", "Escolha um número entre 1 e 40" );
}

    exibirMensagemInicial();




function exibirTextoNatela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto) {
        exibirTextoNatela("h1","Acertou");
        let palavraTentativa =  tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNatela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
        exibirTextoNatela("p", "O numero secreto e menor ");
    } else {
        exibirTextoNatela ("p" , " O numero secreto e maior");
        }
        tentativas++;
        limparCampo ();

    }

    }


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
