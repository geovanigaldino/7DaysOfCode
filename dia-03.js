alert('Olá, seja bem-vindo ao Jogo da Área de Desenvolvimento!');

let escolha = prompt('Qual área você deseja seguir, Front-End ou Back-End?').toLowerCase();

while (escolha !== 'front-end' && escolha !== 'back-end') {
    alert('Opção inválida! Escolha entre Front-End ou Back-End.');
    escolha = prompt('Qual área você deseja seguir, Front-End ou Back-End?').toLowerCase();
}

if (escolha === 'front-end') {
    let framework = prompt('Você escolheu Front-End! Qual framework você quer aprender, React ou Vue?').toLowerCase();

    if (framework === "react") {
        alert('Você escolheu React, prepare-se para construir interfaces incríveis!');
    } else if (framework === "vue") {
        alert('Você escolheu Vue, prepare-se para criar aplicações web dinâmicas!');
    } else {
        alert('Opção inválida! Escolha entre React ou Vue.');
    }
} else if (escolha === 'back-end') {
    let framework = prompt('Você escolheu Back-End! Qual linguagem você quer aprender, C# ou Java?').toLowerCase();

    if (framework === 'c#') {
        alert('Você escolheu C#, prepare-se para desenvolver aplicações robustas!');
    } else if (framework === 'java') {
        alert('Você escolheu Java, prepare-se para criar aplicações escaláveis!');
    } else {
        alert('Opção inválida! Escolha entre C# ou Java.');
    }
}

let areaEscolhida = prompt('Você deseja se especializar na área escolhida ou se tornar Fullstack?').toLowerCase();

while (areaEscolhida !== 'especializar' && areaEscolhida !== 'fullstack') {
    alert('Opção inválida! Escolha entre "Especializar" ou "Fullstack".')
    areaEscolhida = prompt('Você deseja se especializar na área escolhida ou se tornar Fullstack?').toLowerCase();
}

if (areaEscolhida === 'especializar') {
    alert('Ótima escolha! Aprofunde-se ainda mais e torne-se um especialista na sua área.');
} else if (areaEscolhida === 'fullstack') {
    alert('Incrível! Você vai aprender tanto Front-End quanto Back-End e se tornar um desenvolvedor Fullstack!');
}

let tecnologias = [];
let continuar = 'ok';

while (continuar.toLowerCase() === 'ok') {
    let tecnologia = prompt('Qual outra tecnologia você gostaria de aprender?');

    tecnologias.push(tecnologia);

    continuar = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda "ok" para adicionar mais ou digite "sair" para sair.');
}

alert('Que legal! Você quer aprender as seguintes tecnologias: ' + tecnologias.join(', ') + '. Boa jornada de aprendizado!');
