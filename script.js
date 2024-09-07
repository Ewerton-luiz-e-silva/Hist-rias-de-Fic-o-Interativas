// Função para adicionar a animação à seção de resultados
function adicionarAnimacao() {
    let section = document.getElementById("resultados-pesquisa"); // Obtém o elemento da seção de resultados de pesquisa pelo ID

    // Adiciona a classe de animação
    section.classList.add('animado'); // Adiciona a classe 'animado', que provavelmente contém animações CSS

    // Remove a classe de animação após a animação terminar
    section.addEventListener('animationend', () => { // Evento que dispara ao final da animação
        section.classList.remove('animado'); // Remove a classe 'animado' quando a animação termina, para permitir reanimações futuras
    });
}

// Modifica a função Pesquisar para incluir a animação
function Pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção de resultados de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value; // Obtém o valor do campo de pesquisa

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) { 
        section.innerHTML = "<p>Nada foi encontrado. Digite o título ou tema da história que deseja explorar.</p>"; // Exibe uma mensagem de erro caso não haja texto inserido
        return; // Sai da função se o campo estiver vazio
    }

    campoPesquisa = campoPesquisa.toLowerCase(); // Converte o texto de pesquisa para letras minúsculas para facilitar a comparação
    let resultados = ""; // Variável que armazenará os resultados da pesquisa

    // Itera sobre o array 'dados', que contém as histórias (presumivelmente definidas em outro lugar)
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase(); // Converte o título da história para minúsculas
        let descricao = dado.descricao.toLowerCase(); // Converte a descrição da história para minúsculas
        let tags = dado.tags.toLowerCase(); // Converte as tags da história para minúsculas

        // Verifica se o texto de pesquisa está no título, descrição ou tags da história
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se houver correspondência, adiciona o HTML correspondente aos resultados
            resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-resultado"> <!-- Exibe a imagem da história -->
                <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2> <!-- Exibe o título como um link -->
                <p class="descricao-meta">${dado.descricao}</p> <!-- Exibe a descrição da história -->
                <a href="${dado.link}" target="_blank">Saiba mais.</a> <!-- Link para a página da história -->
            </div>
            `;
        }
    }

    // Se nenhum resultado for encontrado
    if (!resultados) {
        resultados = "<p>Nenhuma história encontrada. Tente outro tema ou título.</p>"; // Mensagem exibida quando não há correspondências
    }

    section.innerHTML = resultados; // Atualiza o conteúdo da seção de resultados com os resultados encontrados

    // Adiciona a animação após atualizar o conteúdo
    adicionarAnimacao(); // Chama a função que adiciona a animação à seção de resultados
}