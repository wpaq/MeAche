const btnMenos = document.querySelectorAll('.menos');
const btnMais = document.querySelectorAll('.mais');
const numero = document.querySelectorAll('.numero');

for(let i = 0; i <= numero.length; i++) {
  numConvert = [];
  numConvert.push(parseInt(numero[i].value));
  console.log(numero[i])

  btnMenos[i].addEventListener('click', () => {
    console.log(numConvert[i])
    if(numConvert[i] < 1) {
      numero[i].value = numConvert[i] = 0;
    } else {
      numero[i].value = numConvert[i] -= 1;
    }
  });
  btnMais[i].addEventListener('click', () => {
    console.log(numConvert[i])
    numero[i].value = numConvert[i] += 1;
  });
};
