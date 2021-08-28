import elements from "./elements.js";

export default {
  start() {
    elements.get.call(this);
    elements.actions.call(this);

    this.quantidadePedido();
  },
  quantidadePedido() {
    for(let i = 0; i <= this.quantPedido.length; i++) {
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
      if(quantPedido[i].value > 0) {
        pedido[nomePrato[i].innerText] = quantPedido[i].value
      } else {
        delete pedido[nomePrato[i]]
      }      
    }
    return pedido
  },  
  sendPedidoData() {
    getReference().ref().child('pedidos').push(this.createPedidoData())    
    console.log('Enviado')
  } 
}
