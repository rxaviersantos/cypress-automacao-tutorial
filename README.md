<h1 align="center"> Cypress automação tutorial </h1>

<p align="center">
A automação de teste é uma maneira de verificar e validar cenários de teste através de ferramentas e estruturas específicas.  Automação de teste é recomendado para cenários repetitivos, pois economiza tempo e esforço que, de outra forma, teriam que ser investidos por testadores humanos. 
</p>
<p align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green.svg">
</p>

# O que é o Cypress Framework?
É uma ferramenta de automação moderna baseada em NodeJS que suporta JavaScript / Texto datilografia como a linguagem de programação. Existem muitos vantagens e desvantagens de Cypress. No entanto, apesar de sua recência, é a ferramenta mais popular e fácil de usar no mundo da automação, tornando-se rapidamente a favorita dos desenvolvedores e testadores. 

# Guia de instalação do cypress
### Pré-requisitos:

- Instale o [code.visualstudio.com](https://code.visualstudio.com/ "Visual Studio Code") você pode usar qualquer IDE 

- Instale o [nodejs.org](https://nodejs.org/en "nodejs")

> ### Existe duas maneiras de instalar o Cypress:
> 
> 1.   Usando NPM
> 
> Para instalar o Cypress usando o npm (Node package manager), navegue até o diretório do projeto e execute o seguinte comando:
> 
>     npm init  
>     
>    
> O comando acima cria o arquivo package.json. Basta fornecer detalhes fundamentais como - nome do pacote, descrição, palavras-chaves e nome do autor. 
> 
> A imagem abaixo representa a final package.json arquivo assim que o usuário preencher os detalhes.
> 
<p align="center">
  <img alt="projeto tipo de botões" src="https://github.com/rxaviersantos/cypress-automacao-tutorial/assets/85380530/50898043-2c6f-4bfe-9015-052d26c3db46" " height="300px" width="420px"> </p>


> Feito, execute o comando abaixo para instalar o Cypress.
>
>      npm install cypress --save-dev
>
> O comando acima instala o Cypress localmente como uma dependência para o projeto em particular.
>
> Observção: O usuário deve garantir que já executou o comando ```npm init```. É preciso também verificar a existência do modules pasta ou package.json arquivo na raiz do projeto para garantir que o Cypress seja instalado no diretório de destino.
>
> Para o usuário disposto a instalar o Cypress usando o ```Yarn``` gerenciador de pacotes, navegue até o diretório do projeto e execute o seguinte comando:
>
>       yarn add cypress --dev
>
> 2.   Baixando Cypress diretamente
> 
> Para usuários que não estão familiarizados com o npm, ainda desejam experimentar o Cypress instantaneamente, é possível acessar diretamente [jsdelivr.com/package/npm/cypress]( https://www.jsdelivr.com/package/npm/cypress ) e fazer download do *arquivo WinRAR*. O link de download direto detecta automaticamente a plataforma do usuário e busca o arquivo zip com a versão mais recente do Cypress.
> 
> Depois que o arquivo zip for baixado, descompacte e clique duas vezes para iniciar o aplicativo Cypress. Ele começará sem a necessidade de instalar dependências.
>  
### Configurando  o Cypress para automação

O Cypress é enviado como um pacote NPM, portanto instale o pacote npm no repositório e configure-o para usar o Cypress.

Etapa 1: Navegue até a pasta do projeto. Crie uma nova pasta exemplo: (cypress-tutorial).

Etapa 2: Dentro da pasta de *cypress-tutorial*, abra o terminal ou o prompt de comando.

Etapa 3: Digite o comando:  
 ```bash 
 npm install cypress –save-dev
 ```

Etapa 4: Depois que a instalação estiver concluída, insira o comando: 
```bash
npx cypress open
```

O comando  ```npx cypress open``` prepara o Cypress pela primeira vez e lança os corredores de teste do Cypress, onde podemos ver exemplos de testes e brincar com eles.

### Compreendendo estruturas de pastas no Cypress

Por padrão, o Cypress vem com uma estrutura de pastas. A pasta principal é cypress, dentro do qual existem subpastas.

> ```Integration:``` Esta pasta contém os scripts de teste reais.
>
> ```Fixtures:``` Se você estiver usando dados externos em seus testes, seus dados podem ser organizados dentro da pasta Fixtures.
>
> ```Plugins:```A pasta Plugins contém os arquivos especiais que podem executar o código antes que o projeto seja carregado. Se o seu projeto precisar de pré-processadores, inclua-os nesta pasta e configure-os adequadamente. Por padrão, a pasta plugins contém o arquivo *index.js*, que pode ser personalizado para criar suas tarefas.
>
> ```Support:``` A pasta Support contém utilitários, comandos globais, códigos usados ​​com frequência, etc. Por padrão, esta pasta vem com dois arquivos – *commands.js* e *index.js*. Arquivos e pastas adicionais podem ser adicionados conforme necessário.
>
> ```Assets:``` Uma pasta chamada downloads será criada após a execução do teste, incluindo capturas de tela, vídeos etc.

### Estrutura de pasta do projeto com Cypress
```
node_modules folder
cypress folder
cypress.json file
package.json file
package-lock.json file.
```
Para criar seus testes, navegue até a pasta *cypress* / *integration* e crie uma nova pasta nova ( por exemplo: *script*).
Dentro da pasta *cypress-tutorial*, crie o arquivo de teste ( ex: firsttest.spec.js) usando o código abaixo:

```spec
//firsttest.spec.js

describe('Meu Primeiro Test', () => {

    it('Inicie o navegador e navegue', () => {

        cy.visit('https://www.browserstack.com/');

        cy.title().should('eq', 'Aplicativo mais confiável e plataforma de teste entre navegadores | BrowserStack')

    })

  })
  ```
  ### Os testes do Cypress podem ser executados de duas maneiras:
  
1. *Using Cypress Runner (UI)*

2. *Using Cypress CLI (Command Line)*

**1. Execute testes Cypress usando o Cypress Test Runner**

No terminal ou na linha de comando do *Visual Studio Code*, execute o comando no nível da pasta do projeto (**cypress-tutorial**).

```bash
npx cypress open
```
O comando acima abre o Cypress Test Runner. Escolha o arquivo de teste recém-criado. Clique no arquivo firsttest.spec.js na pasta *script* para executar os testes.










