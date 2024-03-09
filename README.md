# facilita-juridico-web

Teste para a vaga de desenvolvedor full stack na empresa Facilita Jurídico (frontend).

Este projeto roda juntamente à [API](https://github.com/gabrielcaamargo/facilita-juridico-api)

### Estrutura

O projeto está organizado da seguinte maneira: 
  - src: Contém todos os arquivos do projeto. É o _core_ do projeto.
    - @types - Contém as tipagens globais da aplicação
    - components - Componentes globais
    - contexts - Contém as contexts do projeto, usadas para manipulação de estados globais
    - pages - Páginas da aplicação
    - services - Services para integração com a API. Service layer usada para desacoplar as chamadas à API, a fim de centralizar e manter responsabilidades únicas dentro do meu app.
    - utils - Funções utilitárias e também contém um cliente http nativo criado com Javascript puro.

### Como executar este projeto

Para executar o projeto você vai precisar das seguintes ferramentas previamente instaladas:

1. [NodeJS](https://nodejs.org/en)
2. Npm (vem instalado junto ao NodeJS)
3. Yarn
   1. Para instalar você deve seguir os seguintes passos:
      1. Abra o seu terminal
      2. ```bash
         $ npm i --g yarn
         ```

#### Clone o projeto

1. ```bash
   $ git clone https://github.com/gabrielcaamargo/facilita-juridico-web.git
   $ cd facilita-juridico-api
   ```

#### Execute o projeto

```bash
# Ambiente de desenvolvimento
$ yarn
$ yarn dev
```

Com estes comandos executados, o projeto estará rodando em http://localhost:3000/api/v1

Observação final: Neste projeto, evitei ao máximo o uso de bibliotecas externas, sendo as únicas que utilizei:
  1. React 
  2. Tailiwind
  3. Phosphor icons 
