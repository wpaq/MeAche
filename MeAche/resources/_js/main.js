import elements from "./elements.js";
import data from "./data.js";

export default {
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
    const pedido = {}
    for(let i = 0; i < this.quantPedido.length; i++) {
      if(this.quantPedido[i].value > 0) {
        pedido[this.nomePrato[i].innerText] = this.quantPedido[i].value
      } else {
        delete pedido[this.nomePrato[i]]
      }      
    }
    return pedido
  },  
  verificaPedido() {
    this.quantPedido.forEach(e => {
      if(parseInt(e.value) != 0) {
        this.pedidoFeito.classList.replace('hidden', 'show')
      } else {
        this.nadaSelecionado.classList.replace('hidden', 'show')
      }
    });
  },
  sendPedidoData() {
    getReference().ref().child('pedidos').push(this.createPedidoData())
        
    console.log('Enviado')
  } 
}
