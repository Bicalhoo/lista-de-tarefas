// Armazenamento das tarefas

var CHAVE_STORAGE = "tarefas-lista";

// Salva as tarefas
function salvarTarefas(lista) {
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
}

// Carrega as tarefas salvas
function carregarTarefas() {
  var texto = localStorage.getItem(CHAVE_STORAGE);

  if (texto === null) {
    return [];
  }

  try {
    return JSON.parse(texto);
  } catch (erro) {
    return [];
  }
}
