const numeroSecreto = Math.floor(Math.random() * 11);
let tentativas = 3;

alert('Tente adivinhar o número entre 0 e 10');

while (tentativas > 0) {
    let chute = parseInt(prompt(`Você tem ${tentativas} tentativas. Qual é o seu chute?`));

    if (chute === numeroSecreto) {
        alert('🎉 Parabéns! Você acertou o número!');
        break;
    } else {
        tentativas -= 1;

        if (tentativas > 0) {
            alert(`❌ Você errou. Restam ${tentativas} tentativa(s).`);
        } else {
            alert(`😢 Que pena! O número secreto era ${numeroSecreto}.`);
        }
    }
}
