getReference().ref('pedidos').on('value', function (snapshot) {

  var trbody = $('#pedidos_pendentes');
      trbody.html('');

  snapshot.forEach(function (item) {
    console.log(item)

    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var input_checkbox = document.createElement('input');
    var td_pedidos = document.createElement('td');
    var td_num_pedidos = document.createElement('td');
    var space = document.createTextNode('');
    var linebreak = document.createElement('br');
    var ul = document.createElement('ul');

    var numberPedido = document.createTextNode(item.val().Numero_Pedido);

    // li's //
      var lis = [];
      for(x = 1; x <= 29; x++) {
          var createLis = $('<li></li>');
          lis.push(createLis);
      }
      $(ul).append(lis);
    //! li's !//

    // petiscos //
      var itensPet = [item.val().Asinha_de_frango + "x Asinha de Frango", item.val().Camarao_Alho_Oleo + "x Camarão Alho e Óleo",
                      item.val().Calabresa + "x Calabresa com Fritas", item.val().Carne_de_Sol + "x Carne de Sol C/ Macaxeira",
                      item.val().Torresmo + "x Torresmo", item.val().Batata_Frita + "x Batata Frita",
                      item.val().Macaxeira + "x Macaxeira", item.val().Baiao_de_Dois + "x Baião de Dois"];

      var petiscos_1 = (itensPet[0]);
      var obs1 = (' - Obs: ' + item.val().Text1);

      var petiscos_2 = (itensPet[1]);
      var obs2 = (' - Obs: '  + item.val().Text2);

      var petiscos_3 = (itensPet[2]);
      var obs3 = (' - Obs: '  + item.val().Text3);

      var petiscos_4 = (itensPet[3]);
      var obs4 = (' - Obs: ' + item.val().Text4);

      var petiscos_5 = (itensPet[4]);
      var obs5 = (' - Obs: '  + item.val().Text5);

      var petiscos_6 = (itensPet[5]);
      var obs6 = (' - Obs: '  + item.val().Text6);

      var petiscos_7 = (itensPet[6]);
      var obs7 = (' - Obs: '  + item.val().Text7);

      var petiscos_8 = (itensPet[7]);
      var obs8 = (' - Obs: '  + item.val().Text8);
    //! petiscos ! //

    // espetos //
      var espetos_1 = (item.val().Boi + "x  Boi"),
          obs9 = (" - Obs: " + item.val().Text9);

      var espetos_2 = (item.val().Franbacon + "x Franbacon"),
          obs10 = (" - Obs: " + item.val().Text10);

      var espetos_3 = (item.val().Frango + "x Frango"),
          obs11 = (" - Obs: " + item.val().Text11);

      var espetos_4 = (item.val().Coracao_de_Frango + "x Coração de Frango"),
          obs12 = (" - Obs: " + item.val().Text12);

      var espetos_5 = (item.val().Porco + "x Porco"),
          obs13 = (" - Obs: " + item.val().Text13);
    //! espetos !//

    // sucos //
      var sucos_1 = (item.val().Caja + "x Cajá"),
            obs14 = (" - Obs: " + item.val().Text14);
      var sucos_2 = (item.val().Laranja + "x Laranja"),
            obs15 = (" - Obs: " + item.val().Text15);
      var sucos_3 = (item.val().Maracuja + "x Maracujá"),
            obs16 = (" - Obs: " + item.val().Text16);
      var sucos_4 = (item.val().Acerola + "x Acerola"),
            obs17 = (" - Obs: " + item.val().Text17);
      var sucos_5 = (item.val().Goiaba + "x Goiaba"),
            obs18 = (" - Obs: " + item.val().Text18);
      var sucos_6 = (item.val().Jarra_de_Suco + "x Jarra de Suco");
            obs19 = (" - Obs: " + item.val().Text19);
    //! sucos !//

    // refrigerates //
      var refri_1 = document.createTextNode(item.val().Coca_cola + "x" + " Coca-Cola" + item.val().Text20),
          refri_2 = document.createTextNode(item.val().Guarana + "x" + " Guaraná" + item.val().Text21),
          refri_3 = document.createTextNode(item.val().Fanta + "x" + " Fanta" + item.val().Text22),
          refri_4 = document.createTextNode(item.val().Agua_Mineral + "x" + " Àgua Mineral" + item.val().Text23);
    //! refrigerantes !//

    // cervejas //
      var cerv_1 = document.createTextNode(item.val().Skol + "x" + " Skol" + item.val().Text24),
          cerv_2 = document.createTextNode(item.val().Itaipava + "x" + " Itaipava" + item.val().Text25),
          cerv_3 = document.createTextNode(item.val().Original + "x" + " Original" + item.val().Text26),
          cerv_4 = document.createTextNode(item.val().Burdweiser + "x" + " Burdweiser" + item.val().Text27),
          cerv_5 = document.createTextNode(item.val().Eisenbahn + "x" + " Eisenbahn" + item.val().Text28),
          cerv_6 = document.createTextNode(item.val().Heineken + "x" + " Heineken" + item.val().Text29);
    //! cervejas !//

    // appends childs //
      $(trbody).append(tr);
      $(tr).append(th);
      $(tr).append(td_pedidos);
      $(tr).append(td_num_pedidos);
      $(th).append(input_checkbox);

      $(td_pedidos).append(ul);
      $(td_num_pedidos).append(numberPedido);
    //! appends childs !//

    th.setAttribute("scope", "row");
    th.setAttribute('class', 'input_checkbox');

    // to set checkbox function
      input_checkbox.setAttribute("type", "checkbox");
      input_checkbox.setAttribute("onclick","check_tb(this.value)");
    //! to set checkbox function !//

    // set "tr" ID that does not repeat
      tr.setAttribute("class", "trClass");
      var trId = document.getElementsByClassName("trClass");
      for (var i = 0; i < trId.length; i++) {
        trId[i].id = "tr" + (i + 1);}
    //! set "tr" ID that does not repeat !//

    // set "ul" ID that does not repeat
      ul.setAttribute("class", "ulClass");
      var ulID = document.getElementsByClassName("ulClass");
      for (var i = 0; i < ulID.length; i++) {
        ulID[i].id = "ul" + (i + 1);}
    //! set "ul" ID that does not repeat !//

    // set the "input" ID that is not repeated //
      input_checkbox.setAttribute("class", "inputClass");
      var inputId = document.getElementsByClassName("inputClass");
        for (var i = 0; i < trId.length; i++) {
          inputId[i].id = "checkb" + (i + 1);}
    //! set the "input" ID that is not repeated !//

    td_pedidos.setAttribute("colspan", "2");
    td_pedidos.setAttribute('id', 'td_pedidos');
    td_pedidos.setAttribute('class', 'td_pedidos');

    td_num_pedidos.setAttribute("colspan", "2");
    td_num_pedidos.setAttribute('id', 'td_num_pedidos');
    td_num_pedidos.setAttribute('class', 'w3-center');

    // check if value equal to zero to delete from firebase //
      // Petiscos //
        if (item.val().Asinha_de_frango == undefined){
          delete petiscos_1;
         lis[0].remove();
        }else {
          $(lis[0]).append(petiscos_1);
        }
        if (item.val().Text1 == undefined){
          delete obs1;
        } else {
          $(lis[0]).append(obs1);
        }

        if (item.val().Camarao_Alho_Oleo == undefined){
          delete petiscos_2;
         lis[1].remove();
        }else {
          $(lis[1]).append(petiscos_2);
        }
        if (item.val().Text2 == undefined){
          delete obs2;
        } else {
          $(lis[1]).append(obs2);
        }

        if (item.val().Calabresa == undefined){
          delete petiscos_3;
         $( lis[2]).remove();
        }else {
          $(lis[2]).append(petiscos_3);
        }
        if (item.val().Text3 == undefined){
          delete obs3;
        } else {
          $(lis[2]).append(obs3);
        }

        if (item.val().Carne_de_Sol == undefined){
          delete petiscos_4;
         $( lis[3]).remove();
        }else {
          $(lis[3]).append(petiscos_4);
        }
        if (item.val().Text4 == undefined){
          delete obs4;
        } else {
          $(lis[3]).append(obs4);
        }

        if (item.val().Torresmo == undefined){
          delete petiscos_5;
         $( lis[4]).remove();
        }else {
          $(lis[4]).append(petiscos_5);
        }
        if (item.val().Text5 == undefined){
          delete obs5;
        } else {
          $(lis[4]).append(obs5);
        }

        if (item.val().Batata_Frita == undefined){
          delete petiscos_6;
         $( lis[5]).remove();
        }else {
          $(lis[5]).append(petiscos_6);
        }
        if (item.val().Text6 == undefined){
          delete obs6;
        } else {
          $(lis[5]).append(obs6);
        }

          if (item.val().Macaxeira == undefined){
          delete petiscos_7;
         $( lis[6]).remove();
        }else {
          $(lis[6]).append(petiscos_7);
        }
        if (item.val().Text7 == undefined){
          delete obs7;
        } else {
          $(lis[6]).append(obs7);
        }

          if (item.val().Baiao_de_Dois == undefined){
          delete petiscos_8;
         $( lis[7]).remove();
        }else {
          $(lis[7]).append(petiscos_8);
        }
        if (item.val().Text8 == undefined){
          delete obs8;
        } else {
          $(lis[7]).append(obs8);
        }
      //! Petiscos !//

      // Espetos //
        if (item.val().Boi == undefined){
          delete espetos_1;
         $( lis[8]).remove();
        }else {
          $(lis[8]).append(espetos_1);
        }
        if (item.val().Text9 == undefined){
          delete obs9;
        } else {
          $(lis[8]).append(obs9);
        }

        if (item.val().Franbacon == undefined){
          delete espetos_2;
         $( lis[9]).remove();
        }else {
          $(lis[9]).append(espetos_2);
        }
         if (item.val().Text10 == undefined){
          delete obs10;
        } else {
          $(lis[9]).append(obs10);
        }

        if (item.val().Coracao_de_Frango == undefined){
          delete espetos_4;
          $(lis[10]).remove();
        }else {
          $(lis[10]).append(espetos_4);
        }
         if (item.val().Text11 == undefined){
          delete obs11;
        } else {
          $(lis[10]).append(obs11);
        }

        if (item.val().Porco == undefined){
          delete espetos_5;
          $(lis[11]).remove();
        }else {
          $(lis[11]).append(espetos_5);
        }
         if (item.val().Text12 == undefined){
          delete obs12;
        } else {
          $(lis[11]).append(obs12);
        }
      //! Espetos !//

      // Sucos //
        if (item.val().Caja == undefined){
          delete sucos_1;
          $(lis[12]).remove();
        }else {
          $(lis[12]).append(sucos_1);
        }
         if (item.val().Text13 == undefined){
          delete obs13;
        } else {
          $(lis[12]).append(obs13);
        }

        if (item.val().Laranja == undefined){
          delete sucos_2;
          $(lis[13]).remove();
        }else {
          $(lis[13]).append(sucos_2);
        }
         if (item.val().Text14 == undefined){
          delete obs14;
        } else {
          $(lis[13]).append(obs14);
        }

        if (item.val().Maracuja == undefined){
          delete sucos_3;
          $(lis[14]).remove();
        }else {
          $(lis[14]).append(sucos_3);
        }
         if (item.val().Text15 == undefined){
          delete obs15;
        } else {
          $(lis[14]).append(obs15);
        }

        if (item.val().Acerola == undefined){
          delete sucos_4;
          $(lis[15]).remove();
        }else {
          $(lis[15]).append(sucos_4);
        }
         if (item.val().Text16 == undefined){
          delete obs16;
        } else {
          $(lis[15]).append(obs16);
        }

        if (item.val().Goiaba == undefined){
          delete sucos_5;
          $(lis[16]).remove();
        }else {
          $(lis[16]).append(sucos_5);
        }
         if (item.val().Text17 == undefined){
          delete obs17;
        } else {
          $(lis[16]).append(obs17);
        }

        if (item.val().Jarra_de_Suco == undefined){
          delete sucos_6;
          $(lis[17]).remove();
        }else {
          $(lis[17]).append(sucos_6);
        }
         if (item.val().Text18 == undefined){
          delete obs18;
        } else {
          $(lis[17]).append(obs18);
        }
      //! Sucos !//

      // Refrigerantes //
        if (item.val().Coca_cola == undefined){
          delete refri_1;
          $(lis[18]).remove();
        }else {
          $(lis[18]).append(refri_1);
        }
         if (item.val().Text19 == undefined){
          delete obs19;
        } else {
          $(lis[18]).append(obs19);
        }

        if (item.val().Guarana == undefined){
          delete refri_2;
          $(lis[19]).remove();
        }else {
          $(lis[19]).append(refri_2);
        }
         if (item.val().Text20 == undefined){
          delete obs20;
        } else {
          $(lis[19]).append(obs20);
        }

        if (item.val().Fanta == undefined){
          delete refri_3;
          $(lis[20]).remove();
        }else {
          $(lis[20]).append(refri_3);
        }
         if (item.val().Text21 == undefined){
          delete obs21;
        } else {
          $(lis[20]).append(obs21);
        }

        if (item.val().Agua_Mineral == undefined){
          delete refri_4;
          $(lis[21]).remove();
        }else {
          $(lis[21]).append(refri_4);
        }
         if (item.val().Text22 == undefined){
          delete obs22;
        } else {
          $(lis[21]).append(obs22);
        }
      //! Refrigerantes !//

      // Cervejas //
        if (item.val().Skol == undefined){
          delete cerv_1;
          $(lis[22]).remove();
        }else {
          $(lis[22]).append(cerv_1);
        }
         if (item.val().Text23 == undefined){
          delete obs23;
        } else {
          $(lis[22]).append(obs23);
        }

        if (item.val().Itaipava == undefined){
          delete cerv_2;
          $(lis[23]).remove();
        }else {
          $(lis[23]).append(cerv_2);
        }
         if (item.val().Text24 == undefined){
          delete obs24;
        } else {
          $(lis[23]).append(obs24);
        }

        if (item.val().Original == undefined){
          delete cerv_3;
          $(lis[24]).remove();
        }else {
          $(lis[24]).append(cerv_3);
        }
         if (item.val().Text25 == undefined){
          delete obs25;
        } else {
          $(lis[24]).append(obs25);
        }

        if (item.val().Burdweiser == undefined){
          delete cerv_4;
          $(lis[25]).remove();
        }else {
          $(lis[25]).append(cerv_4);
        }
         if (item.val().Text26 == undefined){
          delete obs26;
        } else {
          $(lis[25]).append(obs26);
        }

        if (item.val().Eisenbahn == undefined){
          delete cerv_5;
          $(lis[26]).remove();
        }else {
          $(lis[26]).append(cerv_5);
        }
         if (item.val().Text27 == undefined){
          delete obs27;
        } else {
          $(lis[26]).append(obs27);
        }

        if (item.val().Heineken == undefined){
          delete cerv_6;
          $(lis[27]).remove();
        }else {
          $(lis[27]).append(cerv_6);
        }
         if (item.val().Text28 == undefined){
          delete obs28;
        } else {
          $(lis[27]).append(obs28);
        }

        if (item.val().Frango == undefined){
          delete espetos_3;
          $(lis[28]).remove();
        }else {
          $(lis[28]).append(espetos_3);
        }
         if (item.val().Text29 == undefined){
          delete obs29;
        } else {
          $(lis[28]).append(obs29);
        }
      //! Cervejas !//

    //! check if value equal to zero to delete from firebase !//

    input_checkbox.setAttribute("name", "number");
      $("input[name='number']").each(function(ind) {
      $(this).val(ind + 1);
      });

    $("input[name='number']").each(function(ind) {


      if(localStorage.getItem('checkb'+(ind))){

      $(this)[].checked= true;


     }

         });

  });
});
