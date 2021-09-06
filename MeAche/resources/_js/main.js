import elements from "./elements.js";
import data from "./data.js";

export default {
  pedido: {},
  start() {
    elements.get.call(this);
    elements.actions.call(this);

    this.quantidadePedido();
    this.dataPratos();  
  },
  dataPratos() {
    for(let i = 0; i < data.length; i++) {
      this.nomePrato[i].innerHTML = data[i]
    }    
  },
  showDisplay(el) {
    if(el.classList.contains('hidden')) {
      el.classList.replace('hidden', 'show');
    } else {
      el.classList.replace('show', 'hidden');
    }
  },
  arrowsAnimation(collapseMenu, arrowUp, arrowDown) {
    if(collapseMenu.getAttribute('aria-expanded') === 'true'){
      arrowDown.style.display = "block";
      arrowUp.style.display = "none";    
    } else {
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
    }
  },
  quantidadePedido() {
    for(let i = 0; i < this.quantPedido.length; i++) {
      this.btnMenos[i].addEventListener('click', () => {
        if(this.quantPedido[i].value < 1) {
          this.quantPedido[i].value = 0;
          this.createPedidoData();
        } else {
          this.quantPedido[i].value = parseInt(this.quantPedido[i].value) - 1;
          this.createPedidoData();
        }
      });
      this.btnMais[i].addEventListener('click', () => {
        this.quantPedido[i].value = parseInt(this.quantPedido[i].value) + 1;
        this.createPedidoData();
      });
    };
  },
  createPedidoData() {
    for(let i = 0; i < this.quantPedido.length; i++) {
      if(this.quantPedido[i].value > 0) {
        this.pedido[this.nomePrato[i].innerText] = this.quantPedido[i].value
      } else {
        delete this.pedido[this.nomePrato[i].innerText]
      }      
    }
    return this.pedido    
  },  
  mandarDados() {
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
    this.quantPedido.forEach((e) => {
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

    for(let i = 0; i < this.nomePrato.length; i++) {
        if(trTable[i] && listaTotalDoItem[i] != 0) {
            //Se a tabela já existir somente atualiza os dados
            tdQuant[i].innerText = listaQuantidades[i];           
            tdPreco[i].innerText = listaTotalDoItem[i].toFixed(2);

        } else if(listaQuantidades[i] > 0) {
            //Se existir algum pedido cria a tabela
            this.carrinhoVazio.classList.replace('inherit', 'hidden')            
            this.tabela.classList.replace('hidden', 'inherit')

            const tr = document.createElement('tr')
            tr.setAttribute('class', 'trTable')

            const td_quant = document.createElement('td')
            td_quant.setAttribute('class', 'td-quant')
            const td_name = document.createElement('td')
            td_name.setAttribute('class', 'td-name')
            const td_preco = document.createElement('td')
            td_preco.setAttribute('class', 'td-preco')

            td_quant.innerText = listaQuantidades[i];
            td_name.innerHTML = data[i];
            td_preco.innerText = listaTotalDoItem[i].toFixed(2);

            this.trbody.appendChild(tr)
            tr.appendChild(td_quant)
            tr.appendChild(td_name)
            tr.appendChild(td_preco)

        } else if (trTable[i] && listaQuantidades[i] === 0) {
            //Se não houver pedidos deleta a tabela vazia
            this.trbody.removeChild(trTable[i]);
            if(this.trbody.firstElementChild === null) {
                this.carrinhoVazio.classList.replace('hidden', 'inherit')            
                this.tabela.classList.replace('inherit', 'hidden')
            }          
        }
    }  
    return total
  },
  verificaPedido() {
    const total = this.mandarDados();
        if(total === 0) {
          this.nadaSelecionado.classList.replace('hidden', 'show')          
        } else if(total != 0){  
          this.pedidoFeito.classList.replace('hidden', 'show')
          this.numPedido.innerText = total;          
          
          this.sendPedidoData();
        }      
  },
  sendPedidoData() {
    getReference().ref().child('pedidos').push(this.createPedidoData())
        
    console.log('Enviado')
  }
}
