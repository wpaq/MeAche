getReference().ref('pedidos').on('value', (snapshot) => {

  const trbody = document.querySelector('#pedidos_pendentes');  

  snapshot.forEach(function (item) {
    const arr = []
    item.forEach(function (element) {
      arr.push(element.key + ': ' + element.val())
    })

    var tr = document.createElement('tr');
    var td_checkbox = document.createElement('td');
    var td_pedidos = document.createElement('td');
    var td_num_pedidos = document.createElement('td');
    var input_checkbox = document.createElement('input');
    var ul = document.createElement('ul');

      // li's //
        var lis = [];
        for(let i = 0; i < arr.length; i++) {
            var createLis = $(`<li>${arr[i]}</li>`);
            lis.push(createLis);
        }
        $(ul).append(lis);
      //! li's !//

      // appends childs //
        $(trbody).append(tr);
        $(tr).append(td_checkbox);
        $(tr).append(td_pedidos);
        $(tr).append(td_num_pedidos);
        $(td_checkbox).append(input_checkbox);

        $(td_pedidos).append(ul);
      //! appends childs !//

      td_checkbox.setAttribute("scope", "row");
      td_checkbox.setAttribute('class', 'input_checkbox');

      // to set checkbox function
        input_checkbox.setAttribute("type", "checkbox");
        input_checkbox.setAttribute("onclick","check_tb(this.value)");
      //! to set checkbox function !//

      tr.setAttribute("class", "trClass");
      ul.setAttribute("class", "ulClass");
      input_checkbox.setAttribute("class", "col-4 inputClass");

      td_pedidos.setAttribute('id', 'td_pedidos');
      td_pedidos.setAttribute('class', 'col-4 td_pedidos');

      td_num_pedidos.setAttribute('id', 'td_num_pedidos');
      td_num_pedidos.setAttribute('class', 'col-4 w3-center');

      // check if value equal to zero to delete from firebase //

      //! check if value equal to zero to delete from firebase !//
  });
  
});
