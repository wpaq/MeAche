var numPedido = document.getElementById('novoNumero');

function sendPedido() {
  //CreateNewNumber//
  var ttValue = document.getElementById('totalValue').innerHTML;
  if (ttValue > 0.00 ){
           var sorteados = [];
           var valorMaximo = 1000;

function criarUnico() {
    if (sorteados.length == valorMaximo) {
        if (confirm('Já não há mais! Quer recomeçar?')) sorteados = [];
        else return;
    }
    var sugestao = Math.ceil(Math.random() * valorMaximo);
    while (sorteados.indexOf(sugestao) >= 0) {
        sugestao = Math.ceil(Math.random() * valorMaximo);
    }
    sorteados.push(sugestao);
    return sugestao;
    }
    sorteados = [];
    var sortearNovo = document.getElementById('sortearNovo');
    var novoNumero = document.getElementById('novoNumero');
    novoNumero.innerHTML = criarUnico();}

//CreateNewNumber
if(numPedido.innerHTML===""){delete pedido.Numero_Pedido};

return firebase.database().ref().child('pedidos').push(pedido);
}