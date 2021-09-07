getReference().ref('pedidos').on('value', (snapshot) => {
  const data = JSON.stringify(snapshot.val());
  const key = snapshot.key;

  console.log("Data:",  data)
  console.log("Key:",  key)


  console.log()

  const trbody = document.querySelector('#pedidos_pendentes');

  snapshot.forEach(function (item) {
    var tr = document.createElement('tr');
    var li = document.createElement('li');
    var td_checkbox = document.createElement('td');
    var td_pedidos = document.createElement('td');
    var td_num_pedidos = document.createElement('td');
    var input_checkbox = document.createElement('input');

    var space = document.createTextNode('');
    var linebreak = document.createElement('br');
    var ul = document.createElement('ul');

    var numberPedido = document.createTextNode(item.val().Numero_Pedido);

    // li's //
      var lis = [];
      for(let x = 0; x < 1; x++) {
          var createLis = $(`<li>${data}</li>`);
          lis.push(createLis);
      }
      li = item.key + ": " + item.val()
      $(ul).append(li);
    //! li's !//

    // appends childs //
      $(trbody).append(tr);
      $(tr).append(td_checkbox);
      $(tr).append(td_pedidos);
      $(tr).append(td_num_pedidos);
      $(td_checkbox).append(input_checkbox);

      $(td_pedidos).append(ul);
      $(td_num_pedidos).append(numberPedido);
    //! appends childs !//

    td_checkbox.setAttribute("scope", "row");
    td_checkbox.setAttribute('class', 'input_checkbox');

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

    //! check if value equal to zero to delete from firebase !//

  });
});
