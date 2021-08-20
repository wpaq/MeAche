// Value Petiscos
var camarao = document.getElementById('quantPet2'),
  calabresa = document.getElementById('quantPet3'),
  carneDeSol = document.getElementById('quantPet4'),
  torresmo = document.getElementById('quantPet5'),
  batataFrita = document.getElementById('quantPet6'),
  macaxeira = document.getElementById('quantPet7'),
  baiaoDeDois = document.getElementById('quantPet8');


// Value Espetos
var boi = document.getElementById('quantPet9'),
  franbacon = document.getElementById('quantPet10'),
  frango = document.getElementById('quantPet11'),
  coreFrango = document.getElementById('quantPet12'),
  porco = document.getElementById('quantPet13');

// Value Sucos
var caja = document.getElementById('quantPet14'),
  laranja = document.getElementById('quantPet15'),
  maracuja = document.getElementById('quantPet16'),
  acerola = document.getElementById('quantPet17'),
  goiaba = document.getElementById('quantPet18'),
  jarra = document.getElementById('quantPet19');

// Value Refrigerantes
var coca_cola = document.getElementById('quantPet20'),
  guarana = document.getElementById('quantPet21'),
  fanta = document.getElementById('quantPet22'),
  agua_mineral = document.getElementById('quantPet23');

// Value Cervejas
var skol = document.getElementById('quantPet24'),
  itaipava = document.getElementById('quantPet25'),
  original = document.getElementById('quantPet26'),
  burdweiser = document.getElementById('quantPet27'),
  eisenbahn = document.getElementById('quantPet28'),
  heineken = document.getElementById('quantPet29');

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
//!CreateNewNumber!//
var pedido = {

  //Textarea
  Text1: document.getElementById('escrevaOBS1').value,
  Text2: document.getElementById('escrevaOBS2').value,
  Text3: document.getElementById('escrevaOBS3').value,
  Text4: document.getElementById('escrevaOBS4').value,
  Text5: document.getElementById('escrevaOBS5').value,
  Text6: document.getElementById('escrevaOBS6').value,
  Text7: document.getElementById('escrevaOBS7').value,
  Text8: document.getElementById('escrevaOBS8').value,
  Text9: document.getElementById('escrevaOBS9').value,
  Text10: document.getElementById('escrevaOBS10').value,
  Text11: document.getElementById('escrevaOBS11').value,
  Text12: document.getElementById('escrevaOBS12').value,
  Text13: document.getElementById('escrevaOBS13').value,
  Text14: document.getElementById('escrevaOBS14').value,
  Text15: document.getElementById('escrevaOBS15').value,
  Text16: document.getElementById('escrevaOBS16').value,
  Text17: document.getElementById('escrevaOBS17').value,
  Text18: document.getElementById('escrevaOBS18').value,
  Text19: document.getElementById('escrevaOBS19').value,
  Text20: document.getElementById('escrevaOBS20').value,
  Text21: document.getElementById('escrevaOBS21').value,
  Text22: document.getElementById('escrevaOBS22').value,
  Text23: document.getElementById('escrevaOBS23').value,
  Text24: document.getElementById('escrevaOBS24').value,
  Text25: document.getElementById('escrevaOBS25').value,
  Text26: document.getElementById('escrevaOBS26').value,
  Text27: document.getElementById('escrevaOBS27').value,
  Text28: document.getElementById('escrevaOBS28').value,
  Text29: document.getElementById('escrevaOBS29').value,

  Numero_Pedido: numPedido.innerHTML,

  // Petiscos
  Asinha_de_frango: asinha.value,
  Camarao_Alho_Oleo: camarao.value,
  Calabresa: calabresa.value,
  Carne_de_Sol: carneDeSol.value,
  Torresmo: torresmo.value,
  Batata_Frita: batataFrita.value,
  Macaxeira: macaxeira.value,
  Baiao_de_Dois: baiaoDeDois.value,

  // Espetos
  Boi: boi.value,
  Franbacon: franbacon.value,
  Frango: frango.value,
  Coracao_de_Frango: coreFrango.value,
  Porco: porco.value,

  // Sucos
  Caja: caja.value,
  Laranja: laranja.value,
  Maracuja: maracuja.value,
  Acerola: acerola.value,
  Goiaba: goiaba.value,
  Jarra_de_Suco: jarra.value,

  // Refrigerantes
  Coca_cola: coca_cola.value,
  Guarana: guarana.value,
  Fanta: fanta.value,
  Agua_Mineral: agua_mineral.value,

  // Cervejas
  Skol: skol.value,
  Itaipava: itaipava.value,
  Original: original.value,
  Burdweiser: burdweiser.value,
  Eisenbahn: eisenbahn.value,
  Heineken: heineken.value
};

// Petiscos
if (asinha.value == 0){delete pedido.Asinha_de_frango;delete pedido.Text1};
if (camarao.value == 0){delete pedido.Camarao_Alho_Oleo;delete pedido.Text2};
if (calabresa.value == 0){delete pedido.Calabresa;delete pedido.Text3};
if (carneDeSol.value == 0){delete pedido.Carne_de_Sol;delete pedido.Text4};
if (torresmo.value == 0){delete pedido.Torresmo;delete pedido.Text5};
if (batataFrita.value == 0){delete pedido.Batata_Frita;delete pedido.Text6};
if (macaxeira.value == 0){delete pedido.Macaxeira;delete pedido.Text7};
if (baiaoDeDois.value == 0){delete pedido.Baiao_de_Dois;delete pedido.Text8};

// Espetos
if (boi.value == 0){delete pedido.Boi;delete pedido.Text9};
if (franbacon.value == 0){delete pedido.Franbacon;delete pedido.Text10};
if (frango.value == 0){delete pedido.Frango;delete pedido.Text11};
if (coreFrango.value == 0){delete pedido.Coracao_de_Frango;delete pedido.Text12};
if (porco.value == 0){delete pedido.Porco;delete pedido.Text13};

// Sucos
if (caja.value == 0){delete pedido.Caja;delete pedido.Text14};
if (laranja.value == 0){delete pedido.Laranja;delete pedido.Text15};
if (maracuja.value == 0){delete pedido.Maracuja;delete pedido.Text16};
if (acerola.value == 0){delete pedido.Acerola;delete pedido.Text17};
if (goiaba.value == 0){delete pedido.Goiaba;delete pedido.Text18};
if (jarra.value == 0){delete pedido.Jarra_de_Suco;delete pedido.Text19};

// Refrigerantes
if (coca_cola.value == 0){delete pedido.Coca_cola;delete pedido.Text20};
if (guarana.value == 0){delete pedido.Guarana;delete pedido.Text21};
if (fanta.value == 0){delete pedido.Fanta;delete pedido.Text22};
if (agua_mineral.value == 0){delete pedido.Agua_Mineral;delete pedido.Text23};

// Cervejas
if (skol.value == 0){delete pedido.Skol;delete pedido.Text24};
if (itaipava.value == 0){delete pedido.Itaipava;delete pedido.Text25};
if (original.value == 0){delete pedido.Original;delete pedido.Text26};
if (burdweiser.value == 0){delete pedido.Burdweiser;delete pedido.Text27};
if (eisenbahn.value == 0){delete pedido.Eisenbahn;delete pedido.Text28};
if (heineken.value == 0){delete pedido.Heineken;delete pedido.Text29};

// Textareas
if(document.getElementById('escrevaOBS1').value===""){delete pedido.Text1};
if(document.getElementById('escrevaOBS2').value===""){delete pedido.Text2};
if(document.getElementById('escrevaOBS3').value===""){delete pedido.Text3};
if(document.getElementById('escrevaOBS4').value===""){delete pedido.Text4};
if(document.getElementById('escrevaOBS5').value===""){delete pedido.Text5};
if(document.getElementById('escrevaOBS6').value===""){delete pedido.Text6};
if(document.getElementById('escrevaOBS7').value===""){delete pedido.Text7};
if(document.getElementById('escrevaOBS8').value===""){delete pedido.Text8};
if(document.getElementById('escrevaOBS9').value===""){delete pedido.Text9};
if(document.getElementById('escrevaOBS10').value===""){delete pedido.Text10};
if(document.getElementById('escrevaOBS11').value===""){delete pedido.Text11};
if(document.getElementById('escrevaOBS12').value===""){delete pedido.Text12};
if(document.getElementById('escrevaOBS13').value===""){delete pedido.Text13};
if(document.getElementById('escrevaOBS14').value===""){delete pedido.Text14};
if(document.getElementById('escrevaOBS15').value===""){delete pedido.Text15};
if(document.getElementById('escrevaOBS16').value===""){delete pedido.Text16};
if(document.getElementById('escrevaOBS17').value===""){delete pedido.Text17};
if(document.getElementById('escrevaOBS18').value===""){delete pedido.Text18};
if(document.getElementById('escrevaOBS19').value===""){delete pedido.Text19};
if(document.getElementById('escrevaOBS20').value===""){delete pedido.Text20};
if(document.getElementById('escrevaOBS21').value===""){delete pedido.Text21};
if(document.getElementById('escrevaOBS22').value===""){delete pedido.Text22};
if(document.getElementById('escrevaOBS23').value===""){delete pedido.Text23};
if(document.getElementById('escrevaOBS24').value===""){delete pedido.Text24};
if(document.getElementById('escrevaOBS25').value===""){delete pedido.Text25};
if(document.getElementById('escrevaOBS26').value===""){delete pedido.Text26};
if(document.getElementById('escrevaOBS27').value===""){delete pedido.Text27};
if(document.getElementById('escrevaOBS28').value===""){delete pedido.Text28};
if(document.getElementById('escrevaOBS29').value===""){delete pedido.Text29};

//CreateNewNumber
if(numPedido.innerHTML===""){delete pedido.Numero_Pedido};

return firebase.database().ref().child('pedidos').push(pedido);
}