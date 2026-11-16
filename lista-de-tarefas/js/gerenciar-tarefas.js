// Lógica principal
var tarefas = carregarTarefas();

var formulario = document.getElementById("formulario-tarefa");
var campoTitulo = document.getElementById("campo-titulo");
var campoDescricao = document.getElementById("campo-descricao");
var campoCategoria = document.getElementById("campo-categoria");
var campoData = document.getElementById("campo-data");
var campoImportante = document.getElementById("campo-importante");
var contadorLetras = document.getElementById("contador-letras");
var campoBusca = document.getElementById("campo-busca");
var filtroStatus = document.getElementById("filtro-status");
var botaoLimpar = document.getElementById("botao-limpar");

// Atualiza a tela
function atualizarTela() {
  salvarTarefas(tarefas);
  mostrarTarefas(tarefas, filtroStatus.value, campoBusca.value);
}

// Alterna a conclusão da tarefa
function alternarConclusao(id) {
  for (var i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id === id) {
      tarefas[i].concluida = !tarefas[i].concluida;
    }
  }
  atualizarTela();
}

// Exclui uma tarefa
function excluirTarefa(id) {
  var confirmou = confirm("Deseja realmente excluir esta tarefa?");
  if (!confirmou) {
    return;
  }

  var novaLista = [];
  for (var i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id !== id) {
      novaLista.push(tarefas[i]);
    }
  }
  tarefas = novaLista;
  atualizarTela();
}

// Cadastro de tarefa
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var prioridadeMarcada = document.querySelector('input[name="prioridade"]:checked');
  var prioridade = prioridadeMarcada ? prioridadeMarcada.value : "";

  var erros = validarFormulario(
    campoTitulo.value,
    campoDescricao.value,
    campoCategoria.value,
    prioridade,
    campoData.value
  );

  if (Object.keys(erros).length > 0) {
    mostrarErros(erros);
    return;
  }

  limparErros();

  var novaTarefa = {
    id: Date.now(),
    titulo: campoTitulo.value.trim(),
    descricao: campoDescricao.value.trim(),
    categoria: campoCategoria.value,
    prioridade: prioridade,
    data: campoData.value,
    importante: campoImportante.checked,
    concluida: false
  };

  tarefas.push(novaTarefa);
  atualizarTela();

  formulario.reset();
  contadorLetras.textContent = "0/100";
});

campoDescricao.addEventListener("input", function () {
  contadorLetras.textContent = campoDescricao.value.length + "/100";
});

// Busca e filtro
campoBusca.addEventListener("input", atualizarTela);
filtroStatus.addEventListener("change", atualizarTela);

// Limpa tarefas concluídas
botaoLimpar.addEventListener("click", function () {
  var temConcluida = false;
  for (var i = 0; i < tarefas.length; i++) {
    if (tarefas[i].concluida) {
      temConcluida = true;
    }
  }

  if (!temConcluida) {
    alert("Não há tarefas concluídas para limpar.");
    return;
  }

  var novaLista = [];
  for (var j = 0; j < tarefas.length; j++) {
    if (!tarefas[j].concluida) {
      novaLista.push(tarefas[j]);
    }
  }
  tarefas = novaLista;
  atualizarTela();
});

campoData.min = pegarDataDeHoje();

mostrarTarefas(tarefas, filtroStatus.value, campoBusca.value);
