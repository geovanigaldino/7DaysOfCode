const listaCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

let adicionarComida = prompt('Você deseja adicionar alguma comida na lista de compras? (sim/não) ').toLowerCase();

while (adicionarComida === 'sim') {
    let escolha = prompt('Qual comida você deseja adicionar na lista? ').trim();
    let categoria = prompt('Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces) ').trim();

    categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();

    if (listaCompras[categoria] !== undefined) {
        listaCompras[categoria].push(escolha);
    } else {
        alert('Categoria inválida! O item será adicionado à categoria "Outros".');
        listaCompras.Outros.push(escolha);
    }

    adicionarComida = prompt('Você deseja adicionar mais alguma comida? (sim/não) ').toLowerCase();
}

let mensagem = "Lista de compras:\n";
for (let categoria in listaCompras) {
    if (listaCompras[categoria].length > 0) {
        mensagem += `    ${categoria}: ${listaCompras[categoria].join(', ')}\n`;
    }
}

alert(mensagem);
