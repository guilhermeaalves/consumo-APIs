# consumo-APIs
Repositório para as demonstrações e aprendizado sobre consumo de APIs.

As APIs possuem alguns elementos que servem à sua utilização:

- **Ponto de entrada**: é o endereço do serviço hospedado e que pode ser acessado através de um navegador ou uma ferramenta de consumo de APIs. Exemplo: <https://dadosabertos.camara.leg.br/api/v2>

- **Recursos**: são serviços de dados disponíveis para consumo.
Exemplo: **/deputados** -> <https://dadosabertos.camara.leg.br/api/v2/deputados>.

- **Parâmetros**: são informações ou filtros que servem para enviar dados da consulta ou para serem processados pela API. Os parâmetros podem ser passados para a API através da URL ou no corpo (body) da requisição. Exemplo: ?nome=bebeto -> <https://dadosabertos.camara.leg.br/api/v2/deputados?nome=bebeto>.

- **Métodos**: são os modos de consumo de uma API, que podem ser:
    - GET: consulta/leitura (READ)
    - POST: criação (CREATE)
    - UPTADE: atualização (UPDATE)
    - DELETE: exclusão (DELETE)

Para este projeto vamos usar o Node.js e o NPM (Node Package Manager)

- Node.js v20.13.0 LTS -> Long Term Suport (versão estável)

NPX -> Node Package eXecuter (Executor de pacote do Node)

- **Instalação e uso do Json Server**: <https://github.com/typicode/json-server>
    Para realizar a instalação, basta usar o comando npm 
    ```shell
    npm install json-server
    ```
    E então você precisa criar um arquivo `db.json` ou `db.json5`

    E dentro de algum deles, por o código abaixo referente ao json ou json5

- `db.Json`
```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

<details>

<summary>Olhe um exemplo do db.json5</summary>


```json5
{
  posts: [
    { id: '1', title: 'a title', views: 100 },
    { id: '2', title: 'another title', views: 200 },
  ],
  comments: [
    { id: '1', text: 'a comment about post 1', postId: '1' },
    { id: '2', text: 'another comment about post 1', postId: '1' },
  ],
  profile: {
    name: 'typicode',
  },
}
```

Você pode ser mais sobre formato JSON5 [Aqui](https://github.com/json5/json5).

</details>

- **Execução do json-server**: após ter efetuado os passos anteriores, basta usar o seguinte comando no prompt de comando;
```shell
npx json-server db.json
```
Ou podemos automatizar esta execução - **Criando um script para execução do json-server**: dentro do arquivo `package.json`, gerado na instalação do json-server, usaremos às seguintes linhas de código `dentro das chaves que já estão no arquivo` 

```json
"scripts": {
    "start": "npx json-server data/db.json5"
  }
```

Após ter feito isso, toda vez que quiser executar o json-server, basta digitar o seguinte comando no prompt:

```shell
npm start
```

- **Criação do arquivo .gitignore**: após ter efetuado os passos anteriores, crie um arquivo com o nome `.gitignore`, é um arquivo sem nome, apenas com a extensão, ele fará com que os arquivos escolhidos dentro dele, sejam ignorados, e não sejam versionados.

- Basta por o seguinte comando dentro dele: 
```shell
/node_modules
```

- **Observações em relação ao uso do JSON5 vs JSON**: No 
- Instalação das extensões para formatação de arquivo .json5
- Chamada do script start com NPM ao invés do NPX
- O que pe o Chocolatey (e porque não instalá-lo agora)