const subtotal = document.querySelector('#subtotal');
const spanSubtotal = document.querySelector('#span-subtotal');

subtotal.addEventListener('click', () => {
  if (spanSubtotal.style.display === "none") {
    spanSubtotal.style.display = "block";
  } else {
    spanSubtotal.style.display = "none";
  }
});

function fecharSubtotal(){
 var x = document.getElementById("id01");
   if (x.style.display === "block") {
       x.style.display = "none";
   } else {
       x.style.display = "block";
     }
}
function fecharPedEnv(){
 var pedEnv = document.getElementById("pedido-enviado");
   if (pedEnv.style.display === "block") {
       pedEnv.style.display = "none";
    location.reload();
   } else {
       pedEnv.style.display = "block";
     }
}
function fecharid03(){
 var x = document.getElementById("id03");
   if (x.style.display === "block") {
       x.style.display = "none";
   } else {
       x.style.display = "block";
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
//! Function Arrows !//