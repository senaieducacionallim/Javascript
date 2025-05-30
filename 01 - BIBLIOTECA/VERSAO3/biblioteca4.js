let biblioteca = [];
let livroParaAlterar = null;

function mostrarSecao(secao) {
  // Esconde todas as seções
  
  document.getElementById("consulta").classList.add("hidden");
  document.getElementById("emprestimo").classList.add("hidden");

  // Mostra a seção selecionada
  document.getElementById(secao).classList.remove("hidden");
}

function buscarLivro() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = biblioteca.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
}

function buscarLivroParaAlterar() {
  const busca = document.getElementById("busca-alterar").value.toLowerCase();
  livroParaAlterar = biblioteca.find((livro) =>
    livro.titulo.toLowerCase().includes(busca)
  );

  if (livroParaAlterar) {
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("novo-titulo").value = livroParaAlterar.titulo;
    document.getElementById("novo-autor").value = livroParaAlterar.autor;
    document.getElementById("novo-ano").value = livroParaAlterar.ano;
  } else {
    alert("Livro não encontrado.");
  }
}

function atualizarLista(lista = biblioteca) {
  const tabela = document.getElementById("lista-livros");
  tabela.innerHTML = "";

  lista.forEach((livro) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.ano}</td>
      `;
    tabela.appendChild(linha);
  });
}

let emprestimos = [];

function realizarEmprestimo() {
  const titulo = document.getElementById("emprestimo-titulo").value;
  const nomeUsuario = document.getElementById("emprestimo-nome").value;

  if (titulo && nomeUsuario) {
    const livro = biblioteca.find(
      (livro) => livro.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (livro) {
      emprestimos.push({ titulo: livro.titulo, usuario: nomeUsuario });
      atualizarListaEmprestimos();
      alert("Empréstimo realizado com sucesso!");
      document.getElementById("emprestimo-titulo").value = "";
      document.getElementById("emprestimo-nome").value = "";
    } else {
      alert("Livro não encontrado na biblioteca.");
    }
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function atualizarListaEmprestimos() {
  const listaEmprestimos = document.getElementById("lista-emprestimos");
  listaEmprestimos.innerHTML = "";

  emprestimos.forEach((emprestimo) => {
    const item = document.createElement("li");
    item.textContent = `Livro: ${emprestimo.titulo} - Usuário: ${emprestimo.usuario}`;
    listaEmprestimos.appendChild(item);
  });
}