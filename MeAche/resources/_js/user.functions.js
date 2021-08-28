const subtotal = document.querySelector('#subtotal');
const spanSubtotal = document.querySelector('#span-subtotal');
const closeSubtotal = document.querySelectorAll('.close-subtotal');

const pedidoFeito = document.querySelector('#pedido-feito');
const nadaSelecionado = document.querySelector('#nada-selecionado');
const pedido = document.querySelector('#pedir');

subtotal.addEventListener('click', () => {
  if(spanSubtotal.style.display === "none") {
    spanSubtotal.style.display = "block";
  }
});

for(let i = 0; i <= closeSubtotal.length; i++) {
  if(closeSubtotal[i]) {
    closeSubtotal[i].addEventListener('click', () => {
      if(spanSubtotal.style.display === "block") {
        spanSubtotal.style.display = "none";
      }
    }); 
  }
  
}



function confirma(){
var ttValue = document.getElementById('totalValue').innerHTML;
  if (ttValue > 0.00 ){
  var x = document.getElementById("pedido-enviado");
       if (x.style.display === "none") {
           x.style.display = "block";

       } else {
           x.style.display = "none";
       }
  }else if (ttValue <= 0.00){
     var xx = document.getElementById("id03");
       if (xx.style.display === "none") {
           xx.style.display = "block";
       } else {
           xx.style.display = "none";
       }
}}

function telaSubtotal() {
  var valorT = document.getElementById('totalValue').innerHTML;
    if(valorT >0.00){
      document.getElementById('pedido-vazio').style.display = "none";
      document.getElementById('tbCreate').style.display = "inline-table";
  } else{
      document.getElementById('pedido-vazio').style.display = "block";
      document.getElementById('tbCreate').style.display = "none";
  }
}

// Function Arrows //  
const arrowUp = document.querySelectorAll('.arrowUp');
const arrowDown = document.querySelectorAll('.arrowDown');
const collapseMenu = document.querySelectorAll(".collapseMenu");

for(let i = 0; i <= collapseMenu.length; i++){
  if(collapseMenu[i]) {
    collapseMenu[i].addEventListener('click', () => {
      if(collapseMenu[i].getAttribute('aria-expanded') === 'true'){
        arrowDown[i].style.display = "block";
        arrowUp[i].style.display = "none";    
      } else {
        arrowDown[i].style.display = "none";
        arrowUp[i].style.display = "block";
      }
    });  
  }
  
}
//! Function Arrows !//