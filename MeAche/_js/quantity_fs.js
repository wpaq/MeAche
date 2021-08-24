import elements from "./elements.js";

const ar = {
  start() {
    elements.get.call(this);

    this.quantidadePedido();
  },
  quantidadePedido() {
    for(let i = 0; i <= this.quantPedido.length; i++) {
      this.btnMenos[i].addEventListener('click', () => {
        if(this.quantPedido[i].value < 1) {
          this.quantPedido[i].value = 0;
        } else {
          this.quantPedido[i].value = parseInt(this.quantPedido[i].value) - 1;
        }
      });
      this.btnMais[i].addEventListener('click', () => {
        this.quantPedido[i].value = parseInt(this.quantPedido[i].value) + 1;
      });
    };
  }
}

ar.start()
