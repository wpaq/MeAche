const btnMenos = document.querySelectorAll('.menos');
const btnMais = document.querySelectorAll('.mais');
const numero = document.querySelectorAll('.quantPedido');

for(let i = 0; i <= numero.length; i++) {
  btnMenos[i].addEventListener('click', () => {
    if(numero[i].value < 1) {
      numero[i].value = 0;
    } else {
      numero[i].value = parseInt(numero[i].value) - 1;
    }
  });
  btnMais[i].addEventListener('click', () => {
    numero[i].value = parseInt(numero[i].value) + 1;
  });
};
