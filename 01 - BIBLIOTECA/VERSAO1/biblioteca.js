let biblioteca = [];

function adicionarLivro() {
  let titulo = prompt("Digite o título do livro:");
  let autor = prompt("Digite o autor do livro:");
  let ano = parseInt(prompt("Digite o ano de publicação do livro:"));
  biblioteca.push({ titulo, autor, ano });
  alert("Livro adicionado com sucesso!");
}

function emprestimoLivro() {
  let livroemprestimo = prompt("Digite o título do livro que deseja emprestar:");
  let autoremprestimo = prompt("Digite o nome do Autor do livro a emprestar:");

  biblioteca.push({livroemprestimo, autoremprestimo});
  alert("Empréstimo de Livro realizado com sucesso!");
}


function buscarLivro() {
  let tituloBusca = prompt("Digite o título do livro que deseja buscar:");
  let resultados = biblioteca.filter((livro) =>
    livro.titulo.toLowerCase().includes(tituloBusca.toLowerCase())
  );
  if (resultados.length > 0) {
    let mensagem = "Livros encontrados:\n";
    resultados.forEach((livro) => {
      mensagem += `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}\n`;
    });
    alert(mensagem);
  } else {
    alert("Nenhum livro encontrado com esse título.");
  }
}

function listarLivros() {
  if (biblioteca.length > 0) {
    let mensagem = "Lista de livros na biblioteca:\n";
    biblioteca.forEach((livro) => {
      mensagem += `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}\n`;
    });
    alert(mensagem);
  } else {
    alert("A biblioteca está vazia.");
  }
}

function exibirMenu() {
  return prompt(
    "Menu:\n" +
      "1. Adicionar Livro\n" +
      "2. Buscar Livro\n" +
      "3. Listar Livros\n" +
      "4. Empréstimo de Livros\n" +
      "5. Sair\n" +

      "Escolha uma opção:"
  );
}




let opcao;

do {
  opcao = parseInt(exibirMenu());

  switch (opcao) {
    case 1:
      adicionarLivro();
      break;
    case 2:
      buscarLivro();
      break;
    case 3:
      listarLivros();
      break;
    case 4:
      alert("Saindo do programa...");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
  }
} while (opcao !== 4);
