// Validação do formulário

// Retorna a data de hoje
function pegarDataDeHoje() {
  var hoje = new Date();
  var ano = hoje.getFullYear();
  var mes = String(hoje.getMonth() + 1).padStart(2, "0");
  var dia = String(hoje.getDate()).padStart(2, "0");
  return ano + "-" + mes + "-" + dia;
}

// Verifica os campos do formulário
function validarFormulario(titulo, descricao, categoria, prioridade, dataLimite) {
  var erros = {};

  if (titulo.trim() === "") {
    erros.titulo = "Digite o título da tarefa.";
  } else if (titulo.trim().length < 3) {
    erros.titulo = "O título precisa ter pelo menos 3 letras.";
  }

  if (descricao.length > 100) {
    erros.descricao = "A descrição pode ter no máximo 100 caracteres.";
  }

  if (categoria === "") {
    erros.categoria = "Escolha uma categoria.";
  }

  if (prioridade === "") {
    erros.prioridade = "Escolha uma prioridade.";
  }

  if (dataLimite === "") {
    erros.data = "Escolha a data limite.";
  } else if (dataLimite < pegarDataDeHoje()) {
    erros.data = "A data não pode ser anterior a hoje.";
  }

  return erros;
}
