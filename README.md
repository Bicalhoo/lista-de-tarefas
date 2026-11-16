# Lista de Tarefas

Aplicação web desenvolvida como Projeto Integrador de Front-end. Ela permite cadastrar e organizar tarefas de estudos, trabalho, casa e assuntos pessoais. O projeto foi feito com HTML, CSS e JavaScript, sem dependências ou instalação de pacotes.

## Acessar o projeto

Abra o arquivo `index.html` em um navegador. Também é possível acessar a versão publicada:

[Abrir Lista de Tarefas](https://github.com/Bicalhoo/lista-de-tarefas.git)

## Como usar

1. Preencha o título e escolha uma categoria, uma prioridade e uma data limite.
2. Se quiser, adicione uma descrição e marque a tarefa como importante.
3. Clique em **Adicionar tarefa**. Se algum campo obrigatório estiver incorreto, a aplicação mostrará uma mensagem para ajudar a corrigir.
4. Na lista, use **Concluir** para marcar uma tarefa como feita ou **Reabrir** para torná-la pendente novamente.
5. Use a busca para localizar tarefas pelo título e o seletor para exibir todas, somente as pendentes ou somente as concluídas.
6. Clique em **Limpar concluídas** para remover as tarefas finalizadas.

### Regras do formulário

- O título é obrigatório e deve ter pelo menos 3 caracteres.
- A descrição é opcional e pode ter até 100 caracteres.
- Categoria, prioridade e data limite são obrigatórias.
- A data limite não pode ser anterior ao dia atual.
- Marcar a tarefa como importante é opcional.

## Funcionalidades

- Cadastro de tarefas com título, descrição, categoria, prioridade, data limite e indicação de importância.
- Validação do formulário e mensagens de erro junto aos campos.
- Conclusão, reabertura e exclusão de tarefas.
- Busca por título e filtro por status.
- Contador de caracteres da descrição e resumo de tarefas totais e pendentes.
- Salvamento automático no `localStorage` do navegador. As tarefas continuam disponíveis no mesmo navegador e dispositivo após atualizar ou fechar a página.
- Interface responsiva para celular, tablet e computador.

> Os dados ficam armazenados localmente no navegador. Eles não são sincronizados entre dispositivos ou navegadores.

## Tecnologias

- **HTML5** para a estrutura e os campos da página.
- **CSS3** para a aparência e adaptação a diferentes tamanhos de tela.
- **JavaScript** para validar os dados, responder às ações e atualizar a lista.
- **localStorage** para guardar as tarefas no navegador.

## Organização dos arquivos

```text
lista-de-tarefas/
├── index.html
├── css/
│   └── style.css
├── img/
│   └── checklist.png
└── js/
    ├── validar-formulario.js  # Regras de validação e data atual
    ├── armazenar-tarefas.js   # Leitura e gravação no localStorage
    ├── exibir-tarefas.js      # Criação e exibição dos elementos da lista
    └── gerenciar-tarefas.js   # Eventos e lógica principal da aplicação
```

Os scripts são carregados nessa ordem no `index.html`: validação, armazenamento, interface e, por fim, gerenciamento. Isso permite que as funções usadas pela lógica principal já estejam disponíveis.

## Autor

Felipe Bicalho
