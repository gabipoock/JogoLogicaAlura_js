alert('Oii, visitante! Este é um jogo de número secreto. :)');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


//while=enquanto

//!=  exclamação e sinal de igual juntos significa: "não igual, diferente".

//enquanto o chute não for igual ao número sorteado...

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);
//se chute for igual ao número secreto, escreva a seguinte mensagem na tela:
    if(chute == numeroSecreto) {
       break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}

// se for mais que 1 tentativa, "tentativas" no plural, se não, "tentativa" no singular.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto (${numeroSecreto})! com ${tentativas} ${palavraTentativa}.`);

// a parte acima com mais linhas porém não comum no mercado:
// if(tentativas > 1){
//    alert(`Parabéns! Você descobriu o número secreto (${numerosecreto})! com ${tentativas} tentativas.`);
// } else {
//    alert(`Parabéns! Você descobriu o número secreto (${numerosecreto})! com ${tentativas} tentativa.`);
// }