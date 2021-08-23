const btnMenos = document.querySelectorAll('.menos');
const btnMais = document.querySelectorAll('.mais');
const quantPedido = document.querySelectorAll('.quantPedido');

for(let i = 0; i <= quantPedido.length; i++) {
  btnMenos[i].addEventListener('click', () => {
    if(quantPedido[i].value < 1) {
      quantPedido[i].value = 0;
    } else {
      quantPedido[i].value = parseInt(quantPedido[i].value) - 1;
    }
  });
  btnMais[i].addEventListener('click', () => {
    quantPedido[i].value = parseInt(quantPedido[i].value) + 1;
  });
};
