// <button type="button" id="btAdd"> Adicionar</button>
const btAdd = document.createElement('button')
btAdd.type = 'button'
btAdd.id = 'btAdd'
btAdd.innerHTML = 'Adicionar'

const inputs = [
    { "type": "text", "id": "idProduto", "label": "ID"},
    { "type": "text", "id": "descricao", "label": "Descrição"},
    { "type": "text", "id": "preco", "label": "Preço"}
]

function criaDivInputs (inputs) {

    const divForm = document.createElement('div');
    divForm.classList.add('form');

    inputs.forEach(produto => {
        const div = document.createElement('div');
        div.classList.add('controleForm');
    
        const i = document.createElement('input');
        i.type = produto.type;
        i.id = produto.id;
        i.placeholder = produto.label;
    
        div.append(i);
        divForm.append(div);
        // const l = document.createElement('label');
        // l.for = produto.id;
        // l.innerHTML = produto.label;
    });

    return divForm;
}

const divForm = criaDivInputs(inputs);    
    
divForm.append(btAdd);

document.body.append(divForm);

// <input type="text" id="preco">
// const inputPreco = document.createElement('input')
// inputPreco.type = 'text';
// inputPreco.id = 'preco';
// inputPreco.placeholder = 'p';


// <label for="preco">Preço</label>
// const labelPreco = document.createElement('label')
// labelPreco.for = 'preco';
// labelPreco.innerHTML = 'Preço';
