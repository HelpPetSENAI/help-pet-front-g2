# help-pet-front

## Como começar a contribuir
> Preencha as tópicos vazios desse readme de acordo com a função do seu grupo e faça alterações na seção estrutura de pastas conforme sejam feitas alterações.

## Como rodar o projeto
Clonando este repositório basta entrar na pasta utilizando sua IDE de preferência basta iniciar o projeto no terminal com o comando `` npm start `` para rodar localmente.
## Convenção de nomenclatura
> Padrão de nomeação que deve ser seguido em todas as etapas de desenvolvimento.

### Linguagem
- A ser decidido

### Arquivos e pastas
- kebab-case.
- Com exceção dos arquivos na pasta .github que devem ser todos em maiúsculo todas as pastas e arquivos devem permanecer neste padrão.
- Exemplo:

  ```
    ├── .github/
    │   ├── CODEOWNERS 
    │   └── PULL_REQUEST_TEMPLATE.md 
    └──── src/ 
           ├──assets
           └──pages
                └── page-one.html 
  ```

### Variáveis e funções
- camelCase.
- Nomes de variáveis e funções no front e back end devem seguir este padrão.
- Exemplo:

  ```jsx
  <!-- JavaScript -->
    let accessIcon = document.getElementsByClassName("accessibility-icon")[0]
    let accessOpen = document.getElementsByClassName("accessibility-open")[0]

    function closeMenu() {
    accessOpen.style.display = "";
    accessIcon.style.display = "flex";
    }
  ```

### Componentes react
- PascalCase.
- Tanto as pastas quanto o nome da função do componente devem seguir este padrão para serem diferenciados de funções normais.
- Exemplos:

  ```
  <!-- Estrutura das pastas -->
    └─── src/
        └── components
            └── Header <- Pasta com H maiúsculo
                ├── index.jsx
                └── style.css 
  ```

  ```jsx
  <!-- Dentro de index.jsx -->
    export default function Header() {

    }
  ```
