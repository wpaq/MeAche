const pratos = document.querySelectorAll('.pratos');
const telaPratos = document.querySelectorAll('.desc-pratos');
const closeTela = document.querySelectorAll('.desc-close');
const addButon = document.querySelectorAll('.addPedido');
const nomePrato = document.querySelectorAll('.name-prato');

const subtotalVazio = document.querySelector('#pedido-vazio');
const tabela = document.querySelector('#main-table');
const quantPedido = document.querySelectorAll('.quantPedido');
const totalValue = document.querySelector('#totalValue')
const carrinhoValue = document.querySelector('#carrinhoValue')


function mandarDados() {
    console.log('aaaaaaaaa')
    const trbody = document.getElementById('tablePedidos');
    const trTable = document.querySelectorAll('.trTable');
    const tdQuant = document.querySelectorAll('.td-quant');
    const tdName = document.querySelectorAll('.td-name');
    const tdPreco = document.querySelectorAll('.td-preco');

	//Arrays
	let listaQuantidades = []
    let listaTotalDoItem = []
    let total = 0
    const listaPrecos = [13.00,25.00,15.00,20.00,10.00,10.00,6.00,10.00,4.00,4.00,4.00,4.00,4.00,3.00,3.00,3.00,3.00,3.00,10.00,3.50,3.50,3.50,1.50,3.00,3.00,5.00,6.00,6.00,6.00]

    //Armazena a quantidade de cada prato
	quantPedido.forEach((e) => {
		listaQuantidades.push(parseInt(e.value));
	});

    //Armazena o preço total e o preço de cada item
    for(let i = 0; i < listaQuantidades.length; i++) {
        //Preço Total
        total += (listaQuantidades[i] * listaPrecos[i])
        //Preço de cada Item
        listaTotalDoItem.push(listaQuantidades[i] * listaPrecos[i])
        totalValue.innerText = total.toFixed(2)
        carrinhoValue.innerText = total.toFixed(2)
    }

    for(let i = 0; i < nomePrato.length; i++) {
        if(trTable[i] && listaTotalDoItem[i] != 0) {
            //Se a tabela ja existir E existir algum pedido atualiza os dados
            tdQuant[i].innerText = listaQuantidades[i];
            tdName[i].innerText = nomePrato[i].innerText;
            tdPreco[i].innerText = listaTotalDoItem[i].toFixed(2);

        } else if(listaQuantidades[i] > 0) {
            //Se existir algum pedido cria a tabela
            subtotalVazio.classList.replace('show', 'hidden')            
            tabela.classList.replace('hidden', 'show')

            const tr = document.createElement('tr')
            tr.setAttribute('class', 'trTable')

            const td_quant = document.createElement('td')
            td_quant.setAttribute('class', 'td-quant')
            const td_name = document.createElement('td')
            td_name.setAttribute('class', 'td-name')
            const td_preco = document.createElement('td')
            td_preco.setAttribute('class', 'td-preco')

            td_quant.innerText = listaQuantidades[i];
            td_name.innerText = nomePrato[i].innerText;
            td_preco.innerText = listaTotalDoItem[i].toFixed(2);

            trbody.appendChild(tr)
            tr.appendChild(td_quant)
            tr.appendChild(td_name)
            tr.appendChild(td_preco)
        } else if (trTable[i] && listaQuantidades[i] === 0) {
            //Se não houver pedidos deleta o mesmo vazio
            trbody.removeChild(trTable[i]);
            if(trbody.firstElementChild === null) {
                subtotalVazio.classList.replace('hidden', 'show')            
                tabela.classList.replace('show', 'hidden')
            }          
        }
    }    
}
