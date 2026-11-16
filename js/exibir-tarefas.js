// Funções da interface
function formatarData(data) {
  var partes = data.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function criarElemento(tag, classe, texto) {
  var elemento = document.createElement(tag);
  if (classe) {
    elemento.className = classe;
  }
  if (texto) {
    elemento.textContent = texto;
  }
  return elemento;
}

function limparErros() {
  var mensagens = document.querySelectorAll(".mensagem-erro");
  for (var i = 0; i < mensagens.length; i++) {
    mensagens[i].textContent = "";
  }

  var camposComErro = document.querySelectorAll(".campo-erro");
  for (var j = 0; j < camposComErro.length; j++) {
    camposComErro[j].classList.remove("campo-erro");
  }
}

function mostrarErros(erros) {
  limparErros();

  if (erros.titulo) {
    document.getElementById("erro-titulo").textContent = erros.titulo;
    document.getElementById("campo-titulo").classList.add("campo-erro");
  }
  if (erros.descricao) {
    document.getElementById("erro-descricao").textContent = erros.descricao;
    document.getElementById("campo-descricao").classList.add("campo-erro");
  }
  if (erros.categoria) {
    document.getElementById("erro-categoria").textContent = erros.categoria;
    document.getElementById("campo-categoria").classList.add("campo-erro");
  }
  if (erros.prioridade) {
    document.getElementById("erro-prioridade").textContent = erros.prioridade;
  }
  if (erros.data) {
    document.getElementById("erro-data").textContent = erros.data;
    document.getElementById("campo-data").classList.add("campo-erro");
  }
}

// Cria um cartão de tarefa
function criarCartaoTarefa(tarefa) {
  var cartao = criarElemento("div", "cartao-tarefa prioridade-" + tarefa.prioridade);
  if (tarefa.concluida) {
    cartao.classList.add("concluida");
  }

  var topo = criarElemento("div", "cartao-topo");
  topo.appendChild(criarElemento("span", "cartao-titulo", tarefa.titulo));
  if (tarefa.importante) {
    topo.appendChild(criarElemento("span", "etiqueta-importante", "Importante"));
  }
  cartao.appendChild(topo);

  if (tarefa.descricao !== "") {
    cartao.appendChild(criarElemento("p", "cartao-descricao", tarefa.descricao));
  }

  var textoInfo = tarefa.categoria + " | Prioridade " + tarefa.prioridade + " | Até " + formatarData(tarefa.data);
  cartao.appendChild(criarElemento("p", "cartao-info", textoInfo));

  var botoes = criarElemento("div", "cartao-botoes");

  var textoConcluir = tarefa.concluida ? "Reabrir" : "Concluir";
  var botaoConcluir = criarElemento("button", "botao botao-concluir", textoConcluir);
  botaoConcluir.addEventListener("click", function () {
    alternarConclusao(tarefa.id);
  });

  var botaoExcluir = criarElemento("button", "botao botao-excluir", "Excluir");
  botaoExcluir.addEventListener("click", function () {
    excluirTarefa(tarefa.id);
  });

  botoes.appendChild(botaoConcluir);
  botoes.appendChild(botaoExcluir);
  cartao.appendChild(botoes);

  return cartao;
}

// Exibe as tarefas com busca e filtro
function mostrarTarefas(lista, filtroStatus, textoBusca) {
  var areaLista = document.getElementById("lista-tarefas");
  areaLista.innerHTML = "";

  var busca = textoBusca.trim().toLowerCase();
  var encontradas = 0;

  for (var i = 0; i < lista.length; i++) {
    var tarefa = lista[i];

    if (filtroStatus === "pendentes" && tarefa.concluida) {
      continue;
    }
    if (filtroStatus === "concluidas" && !tarefa.concluida) {
      continue;
    }
    if (busca !== "" && tarefa.titulo.toLowerCase().indexOf(busca) === -1) {
      continue;
    }

    areaLista.appendChild(criarCartaoTarefa(tarefa));
    encontradas++;
  }

  if (encontradas === 0) {
    areaLista.appendChild(criarElemento("div", "lista-vazia", "Nenhuma tarefa encontrada. Que tal adicionar uma?"));
  }

  var pendentes = 0;
  for (var j = 0; j < lista.length; j++) {
    if (!lista[j].concluida) {
      pendentes++;
    }
  }
  document.getElementById("contador-tarefas").textContent =
    lista.length + " tarefa(s) no total, " + pendentes + " pendente(s)";
}
