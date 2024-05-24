// fetch(requisicao) // retorna uma resposta

const requisicao = new Request('http://localhost:3000/produtos', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})

//                     (param)     (return)
fetch(requisicao)
    .then(resposta => resposta.json()) // converte a resposta para JSON
    .then(resposta => {
        const div = document.createElement('div');
        resposta.forEach(produto => {
            const pDescricao = document.createElement('p');
            pDescricao.innerHTML = produto.descricao;

            const pId = document.createElement('p');
            pId.innerHTML = produto.id;

            const pPreco = document.createElement('p');
            pPreco.innerHTML = produto.preco;

            div.append(pId, pDescricao, pPreco);
        });

        document.body.appendChild(div);
    });
// .then(resposta => resposta.json()) // converte a resposta para jso
