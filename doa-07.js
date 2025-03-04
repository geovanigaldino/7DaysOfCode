function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

function calculadora() {
    while (true) {
        console.log("\nEscolha uma operação:");
        console.log("1: Soma");
        console.log("2: Subtração");
        console.log("3: Multiplicação");
        console.log("4: Divisão");
        console.log("5: Sair");

        let escolha = prompt("Digite o número da operação desejada:");

        if (escolha === '5') {
            console.log("Até a próxima!");
            break;
        }

        if (['1', '2', '3', '4'].includes(escolha)) {
            let num1 = parseFloat(prompt("Digite o primeiro número:"));
            let num2 = parseFloat(prompt("Digite o segundo número:"));

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Erro: Entrada inválida. Por favor, digite números.");
                continue;
            }

            let resultado;
            switch (escolha) {
                case '1':
                    resultado = soma(num1, num2);
                    break;
                case '2':
                    resultado = subtracao(num1, num2);
                    break;
                case '3':
                    resultado = multiplicacao(num1, num2);
                    break;
                case '4':
                    resultado = divisao(num1, num2);
                    break;
            }

            console.log(`Resultado: ${resultado}`);
        } else {
            console.log("Opção inválida. Por favor, escolha uma opção de 1 a 5.");
        }
    }
}

calculadora();