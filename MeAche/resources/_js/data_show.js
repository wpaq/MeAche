getReference().ref('pedidos').on('value', (snapshot) => {
  const trbody = document.querySelector('#pedidos_pendentes');  

  snapshot.forEach(function (item) {
    const arr = []
    item.forEach(function (element) {
      arr.push(element.key + ': ' + element.val())
    })

    let tr = document.createElement('tr');
    let td_pedidos = document.createElement('td');
    let ul = document.createElement('ul');

      // li's //
        let lis = [];
        for(let i = 0; i < arr.length; i++) {
            let createLis = $(`<li>${arr[i]}</li>`);
            lis.push(createLis);
        }
        $(ul).append(lis);
      //! li's !//

      // appends childs //
        $(trbody).append(tr);
        $(tr).append(td_pedidos);

        $(td_pedidos).append(ul);
      //! appends childs !//
  });
});
