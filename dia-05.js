const listaCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

function formatarCategoria(categoria) {
    return categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();
}

function validarCategoria(categoria) {
    return listaCompras.hasOwnProperty(categoria);
}

function exibirLista() {
    let mensagem = "Lista de compras:\n";
    for (let categoria in listaCompras) {
        if (listaCompras[categoria].length > 0) {
            mensagem += `    ${categoria}: ${listaCompras[categoria].join(', ')}\n`;
        }
    }
    return mensagem;
}

function removerItem() {
    if (Object.values(listaCompras).flat().length === 0) {
        alert('A lista de compras está vazia. Não há itens para remover.');
        return;
    }

    alert(exibirLista());

    let item = prompt('Qual item você deseja remover? ').trim();

    let itemEncontrado = false;
    for (let categoria in listaCompras) {
        let index = listaCompras[categoria].findIndex(i => i.toLowerCase() === item.toLowerCase());
        if (index !== -1) {
            listaCompras[categoria].splice(index, 1);
            alert(`${item} foi removido da categoria ${categoria}.`);
            itemEncontrado = true;
            break;
        }
    }

    if (!itemEncontrado) {
        alert('Não foi possível encontrar o item dentro da lista!');
    }
}

while (true) {
    let opcao = prompt(`O que você deseja fazer?\n1 - Adicionar um item\n2 - Remover um item\n3 - Ver lista de compras\n4 - Sair`).trim();

    if (opcao === '1') {
        let escolha = prompt('Qual comida você deseja adicionar na lista? ').trim();
        let categoria = prompt('Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces) ').trim();

        categoria = formatarCategoria(categoria);
        if (!validarCategoria(categoria)) {
            alert('Categoria inválida! O item será adicionado à categoria "Outros".');
            categoria = 'Outros';
        }
 
        listaCompras[categoria].push(escolha);
        alert(`${escolha} foi adicionado à categoria ${categoria}.`);
    } else if (opcao === '2') {
        removerItem();
    } else if (opcao === '3') {
        alert(exibirLista());
    } else if (opcao === '4') {
        alert('Saindo...');
        break;
    } else {
        alert('Opção inválida! Por favor, escolha uma opção válida.');
    }
}