function mandardados1(){
//value
				var listaQuantidades = []
				for(var i =1;i<=29;i++){
								var elementId = 'quantPet'+i;
								listaQuantidades.push(parseInt(document.getElementById(elementId).value))
				}
				var listaPrecos = [
								13.00,25.00,15.00,20.00,10.00,
								10.00,6.00,10.00,4.00,4.00,
								4.00,4.00,4.00,3.00,3.00,
								3.00,3.00,3.00,10.00,3.50,
								3.50,3.50,1.50,3.00,3.00,
								5.00,6.00,6.00,6.00
				]
				var listaTotalDoItem = []
				var	trbody = document.getElementById('tablePedidos');

				if ($("#tr1").length){

								var quantPetisco1 = document.getElementById('quantPetisco1');
								quantPetisco1.innerText = listaQuantidades[0];

								var asinha = document.getElementById('asinha').firstChild.innerHTML;
								document.getElementById('namePrato1').innerHTML = asinha;

								var result =0.0;
								for( var i = 0; i < 29 ; i++){
												result += (listaQuantidades[i]*listaPrecos[i]);
								}

								for( var i = 0; i < 29 ; i++){
												listaTotalDoItem.push(listaQuantidades[i]*listaPrecos[i]);
								}

								document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
								document.getElementById('precoPetisco1').innerHTML = listaTotalDoItem[0].toFixed(2);
								document.getElementById('totalValue').innerHTML = result.toFixed(2);

									if(listaQuantidades[0]<=0){
													var tr = document.getElementById("tr1");
													tr.parentNode.removeChild(tr);
									}
					}
					else {
									if (listaQuantidades[0]>=1){

													var tr = document.createElement('tr'),

													td_quantPetisco1 = document.createElement('td'),
													td_namePetisco1= document.createElement('td'),
													td_precoPetisco1 = document.createElement('td');
													tr.setAttribute("id","tr1");
													td_quantPetisco1.setAttribute("id", "quantPetisco1");
													td_namePetisco1.setAttribute("id", "namePrato1");
													td_precoPetisco1.setAttribute("id", "precoPetisco1");

													trbody.appendChild(tr);
													tr.appendChild(td_quantPetisco1);
													tr.appendChild(td_namePetisco1);
													tr.appendChild(td_precoPetisco1);

													var quantPetisco1 = document.getElementById('quantPetisco1');
													quantPetisco1.innerText = listaQuantidades[0];

													var asinha = document.getElementById('asinha').firstChild.innerHTML;
													document.getElementById('namePrato1').innerHTML = asinha;

													var result =0.0;
													for( var i = 0; i < 29 ; i++){
																	result += (listaQuantidades[i]*listaPrecos[i]);
													}

													for( var i = 0; i < 29 ; i++){
															listaTotalDoItem.push(listaQuantidades[i]*listaPrecos[i]);
													}

													document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
													document.getElementById('precoPetisco1').innerHTML = listaTotalDoItem[0].toFixed(2);
													document.getElementById('totalValue').innerHTML = result.toFixed(2);

													td_quantPetisco1.style.textAlign="center";
													td_namePetisco1.style.textAlign="center";
													td_precoPetisco1.style.textAlign="center";
									}
				}
}

function mandardados2(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr2").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco2 = document.getElementById('quantPetisco2');
	quantPetisco2.innerText = value2;

	var camarao= document.getElementById('camarao').firstChild.innerHTML;
	document.getElementById('namePrato2').innerHTML = camarao;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco2 * value2);

	document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco2').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
   	if(value2<=0){
		var tr = document.getElementById("tr2");
		tr.parentNode.removeChild(tr); }
    } else {
if (value2>=1){
		if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
		if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
		if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
		if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
		if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
		if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
		if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
		if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
		if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
		if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
		if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
		if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
		if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
		if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
		if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
		if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
		if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
		if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
		if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
		if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
		if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
		if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
		if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
		if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
		if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
		if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
		if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
		if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
		if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

		var tr = document.createElement('tr'),
			td_quantPetisco2 = document.createElement('td'),
			td_namePetisco2= document.createElement('td'),
			td_precoPetisco2 = document.createElement('td');

		tr.setAttribute("id","tr2");
		td_quantPetisco2.setAttribute("id", "quantPetisco2");
		td_namePetisco2.setAttribute("id", "namePrato2");
		td_precoPetisco2.setAttribute("id", "precoPetisco2");

		trbody.appendChild(tr);
		tr.appendChild(td_quantPetisco2);
	tr.appendChild(td_namePetisco2);
	tr.appendChild(td_precoPetisco2);

	var quantPetisco2 = document.getElementById('quantPetisco2');
	quantPetisco2.innerText = value2;

	var camarao= document.getElementById('camarao').firstChild.innerHTML;
	document.getElementById('namePrato2').innerHTML = camarao;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco2 * value2);

	document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco2').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco2.style.textAlign="center";
td_namePetisco2.style.textAlign="center";
td_precoPetisco2.style.textAlign="center";
}
}
}

function mandardados3(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

				 if ($("#tr3").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco3 = document.getElementById('quantPetisco3');
	quantPetisco3.innerText = value3;

	var calabresa = document.getElementById('calabresa').firstChild.innerHTML;
	document.getElementById('namePrato3').innerHTML = calabresa;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco3 * value3);

document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco3').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
	if(value3<=0){
		var tr = document.getElementById("tr3");
		tr.parentNode.removeChild(tr); }

    } else {
if (value3>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco3 = document.createElement('td'),
		td_namePetisco3= document.createElement('td'),
		td_precoPetisco3 = document.createElement('td');

	tr.setAttribute("id","tr3");
	td_quantPetisco3.setAttribute("id", "quantPetisco3");
	td_namePetisco3.setAttribute("id", "namePrato3");
	td_precoPetisco3.setAttribute("id", "precoPetisco3");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco3);
	tr.appendChild(td_namePetisco3);
	tr.appendChild(td_precoPetisco3);

	var quantPetisco3 = document.getElementById('quantPetisco3');
	quantPetisco3.innerText = value3;

	var calabresa = document.getElementById('calabresa').firstChild.innerHTML;
	document.getElementById('namePrato3').innerHTML = calabresa;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco3 * value3);

document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco3').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco3.style.textAlign="center";
td_namePetisco3.style.textAlign="center";
td_precoPetisco3.style.textAlign="center";
}
}
}
function mandardados4(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr4").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco4 = document.getElementById('quantPetisco4');
	quantPetisco4.innerText = value4;

	var carneSol= document.getElementById('carneSol').firstChild.innerHTML;
	document.getElementById('namePrato4').innerHTML = carneSol;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco4 * value4);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco4').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value4<=0){
		var tr = document.getElementById("tr4");
		tr.parentNode.removeChild(tr); }
    } else {
if (value4>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}


	var tr = document.createElement('tr'),
		td_quantPetisco4 = document.createElement('td'),
		td_namePetisco4= document.createElement('td'),
		td_precoPetisco4 = document.createElement('td');

	tr.setAttribute("id","tr4");
	td_quantPetisco4.setAttribute("id", "quantPetisco4");
	td_namePetisco4.setAttribute("id", "namePrato4");
	td_precoPetisco4.setAttribute("id", "precoPetisco4");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco4);
	tr.appendChild(td_namePetisco4);
	tr.appendChild(td_precoPetisco4);

	var quantPetisco4 = document.getElementById('quantPetisco4');
	quantPetisco4.innerText = value4;

	var carneSol= document.getElementById('carneSol').firstChild.innerHTML;
	document.getElementById('namePrato4').innerHTML = carneSol;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco4 * value4);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco4').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco4.style.textAlign="center";
td_namePetisco4.style.textAlign="center";
td_precoPetisco4.style.textAlign="center";
}
}
}
function mandardados5(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr5").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco5 = document.getElementById('quantPetisco5');
	quantPetisco5.innerText = value5;

	var torresmo = document.getElementById('torresmo').firstChild.innerHTML;
	document.getElementById('namePrato5').innerHTML = torresmo;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));;
	var mult = (preco5 * value5);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco5').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value5<=0){
		var tr = document.getElementById("tr5");
		tr.parentNode.removeChild(tr); }
    } else {
if (value5>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}



	var tr = document.createElement('tr'),
		td_quantPetisco5 = document.createElement('td'),
		td_namePetisco5= document.createElement('td'),
		td_precoPetisco5 = document.createElement('td');

	tr.setAttribute("id","tr5");
	td_quantPetisco5.setAttribute("id", "quantPetisco5");
	td_namePetisco5.setAttribute("id", "namePrato5");
	td_precoPetisco5.setAttribute("id", "precoPetisco5");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco5);
	tr.appendChild(td_namePetisco5);
	tr.appendChild(td_precoPetisco5);

	var quantPetisco5 = document.getElementById('quantPetisco5');
	quantPetisco5.innerText = value5;

	var torresmo = document.getElementById('torresmo').firstChild.innerHTML;
	document.getElementById('namePrato5').innerHTML = torresmo;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));;
	var mult = (preco5 * value5);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco5').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
td_quantPetisco5.style.textAlign="center";
td_namePetisco5.style.textAlign="center";
td_precoPetisco5.style.textAlign="center";
}
}
}
function mandardados6(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr6").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco6 = document.getElementById('quantPetisco6');
	quantPetisco6.innerText = value6;

	var batata = document.getElementById('batata').firstChild.innerHTML;
	document.getElementById('namePrato6').innerHTML = batata;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco6 * value6);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco6').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
	if(value6<=0){
		var tr = document.getElementById("tr6");
		tr.parentNode.removeChild(tr); }
    } else {
if (value6>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}


	var tr = document.createElement('tr'),
		td_quantPetisco6 = document.createElement('td'),
		td_namePetisco6= document.createElement('td'),
		td_precoPetisco6 = document.createElement('td');

	tr.setAttribute("id","tr6");
	td_quantPetisco6.setAttribute("id", "quantPetisco6");
	td_namePetisco6.setAttribute("id", "namePrato6");
	td_precoPetisco6.setAttribute("id", "precoPetisco6");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco6);
	tr.appendChild(td_namePetisco6);
	tr.appendChild(td_precoPetisco6);

	var quantPetisco6 = document.getElementById('quantPetisco6');
	quantPetisco6.innerText = value6;

	var batata = document.getElementById('batata').firstChild.innerHTML;
	document.getElementById('namePrato6').innerHTML = batata;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco6 * value6);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco6').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco6.style.textAlign="center";
td_namePetisco6.style.textAlign="center";
td_precoPetisco6.style.textAlign="center";
}
}
}
function mandardados7(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr7").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco7 = document.getElementById('quantPetisco7');
	quantPetisco7.innerText = value7;

	var macaxeira = document.getElementById('macaxeira').firstChild.innerHTML;
	document.getElementById('namePrato7').innerHTML =  macaxeira;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco7 * value7);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco7').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value7<=0){
		var tr = document.getElementById("tr7");
		tr.parentNode.removeChild(tr); }
    } else {
if (value7>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco7 = document.createElement('td'),
		td_namePetisco7= document.createElement('td'),
		td_precoPetisco7 = document.createElement('td');

	tr.setAttribute("id","tr7");
	td_quantPetisco7.setAttribute("id", "quantPetisco7");
	td_namePetisco7.setAttribute("id", "namePrato7");
	td_precoPetisco7.setAttribute("id", "precoPetisco7");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco7);
	tr.appendChild(td_namePetisco7);
	tr.appendChild(td_precoPetisco7);

	var quantPetisco7 = document.getElementById('quantPetisco7');
	quantPetisco7.innerText = value7;

	var macaxeira = document.getElementById('macaxeira').firstChild.innerHTML;
	document.getElementById('namePrato7').innerHTML =  macaxeira;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco7 * value7);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco7').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco7.style.textAlign="center";
td_namePetisco7.style.textAlign="center";
td_precoPetisco7.style.textAlign="center";
}
}
}
function mandardados8(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr8").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco8 = document.getElementById('quantPetisco8');
	quantPetisco8.innerText = value8;

	var baiao = document.getElementById('baiao').firstChild.innerHTML;
	document.getElementById('namePrato8').innerHTML = baiao;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco8 * value8);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco8').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value8<=0){
		var tr = document.getElementById("tr8");
		tr.parentNode.removeChild(tr); }
    } else {
if (value8>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}


	var tr = document.createElement('tr'),
		td_quantPetisco8 = document.createElement('td'),
		td_namePetisco8= document.createElement('td'),
		td_precoPetisco8 = document.createElement('td');

	tr.setAttribute("id","tr8");
	td_quantPetisco8.setAttribute("id", "quantPetisco8");
	td_namePetisco8.setAttribute("id", "namePrato8");
	td_precoPetisco8.setAttribute("id", "precoPetisco8");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco8);
	tr.appendChild(td_namePetisco8);
	tr.appendChild(td_precoPetisco8);

	var quantPetisco8 = document.getElementById('quantPetisco8');
	quantPetisco8.innerText = value8;

	var baiao = document.getElementById('baiao').firstChild.innerHTML;
	document.getElementById('namePrato8').innerHTML = baiao;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco8 * value8);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco8').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco8.style.textAlign="center";
td_namePetisco8.style.textAlign="center";
td_precoPetisco8.style.textAlign="center";
}
}
}
function mandardados9(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr9").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco9 = document.getElementById('quantPetisco9');
	quantPetisco9.innerText = value9;

	var boi = document.getElementById('boi').firstChild.innerHTML;
	document.getElementById('namePrato9').innerHTML = boi;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco9 * value9);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco9').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value9<=0){
		var tr = document.getElementById("tr9");
		tr.parentNode.removeChild(tr); }
    } else {
if (value9>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco9 = document.createElement('td'),
		td_namePetisco9= document.createElement('td'),
		td_precoPetisco9 = document.createElement('td');
	tr.setAttribute("id","tr9");
	td_quantPetisco9.setAttribute("id", "quantPetisco9");
	td_namePetisco9.setAttribute("id", "namePrato9");
	td_precoPetisco9.setAttribute("id", "precoPetisco9");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco9);
	tr.appendChild(td_namePetisco9);
	tr.appendChild(td_precoPetisco9);

	var quantPetisco9 = document.getElementById('quantPetisco9');
	quantPetisco9.innerText = value9;

	var boi = document.getElementById('boi').firstChild.innerHTML;
	document.getElementById('namePrato9').innerHTML = boi;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco9 * value9);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco9').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco9.style.textAlign="center";
td_namePetisco9.style.textAlign="center";
td_precoPetisco9.style.textAlign="center";
}
}
}
function mandardados10(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr10").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco10 = document.getElementById('quantPetisco10');
	quantPetisco10.innerText = value10;

	var franbacon= document.getElementById('franbacon').firstChild.innerHTML;
	document.getElementById('namePrato10').innerHTML = franbacon;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco10 * value10);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco10').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value10<=0){
		var tr = document.getElementById("tr10");
		tr.parentNode.removeChild(tr); }
    } else {
if (value10>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco10 = document.createElement('td'),
		td_namePetisco10= document.createElement('td'),
		td_precoPetisco10 = document.createElement('td');

	tr.setAttribute("id","tr10");
	td_quantPetisco10.setAttribute("id", "quantPetisco10");
	td_namePetisco10.setAttribute("id", "namePrato10");
	td_precoPetisco10.setAttribute("id", "precoPetisco10");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco10);
	tr.appendChild(td_namePetisco10);
	tr.appendChild(td_precoPetisco10);

	var quantPetisco10 = document.getElementById('quantPetisco10');
	quantPetisco10.innerText = value10;

	var franbacon= document.getElementById('franbacon').firstChild.innerHTML;
	document.getElementById('namePrato10').innerHTML = franbacon;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco10 * value10);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco10').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco10.style.textAlign="center";
td_namePetisco10.style.textAlign="center";
td_precoPetisco10.style.textAlign="center";
}
}
}
function mandardados11(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr11").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco11 = document.getElementById('quantPetisco11');
	quantPetisco11.innerText = value11;

	var frango = document.getElementById('frango').firstChild.innerHTML;
	document.getElementById('namePrato11').innerHTML = frango;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco11 * value11);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco11').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value11<=0){
		var tr = document.getElementById("tr11");
		tr.parentNode.removeChild(tr); }

    } else {
	if(value11>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco11 = document.createElement('td'),
		td_namePetisco11= document.createElement('td'),
		td_precoPetisco11 = document.createElement('td');

	tr.setAttribute("id","tr11");
	td_quantPetisco11.setAttribute("id", "quantPetisco11");
	td_namePetisco11.setAttribute("id", "namePrato11");
	td_precoPetisco11.setAttribute("id", "precoPetisco11");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco11);
	tr.appendChild(td_namePetisco11);
	tr.appendChild(td_precoPetisco11);

	var quantPetisco11 = document.getElementById('quantPetisco11');
	quantPetisco11.innerText = value11;

	var frango = document.getElementById('frango').firstChild.innerHTML;
	document.getElementById('namePrato11').innerHTML = frango;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco11 * value11);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco11').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco11.style.textAlign="center";
td_namePetisco11.style.textAlign="center";
td_precoPetisco11.style.textAlign="center";
}
}
}
function mandardados12(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr12").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco12 = document.getElementById('quantPetisco12');
	quantPetisco12.innerText = value12;

	var coracaoDeFrango= document.getElementById('coracaoDeFrango').firstChild.innerHTML;
	document.getElementById('namePrato12').innerHTML = coracaoDeFrango;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco12 * value12);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco12').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
	if(value12<=0){
		var tr = document.getElementById("tr12");
		tr.parentNode.removeChild(tr); }
    } else {
if (value12>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}


	var tr = document.createElement('tr'),
		td_quantPetisco12 = document.createElement('td'),
		td_namePetisco12= document.createElement('td'),
		td_precoPetisco12 = document.createElement('td');

	tr.setAttribute("id","tr12");
	td_quantPetisco12.setAttribute("id", "quantPetisco12");
	td_namePetisco12.setAttribute("id", "namePrato12");
	td_precoPetisco12.setAttribute("id", "precoPetisco12");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco12);
	tr.appendChild(td_namePetisco12);
	tr.appendChild(td_precoPetisco12);

	var quantPetisco12 = document.getElementById('quantPetisco12');
	quantPetisco12.innerText = value12;

	var coracaoDeFrango= document.getElementById('coracaoDeFrango').firstChild.innerHTML;
	document.getElementById('namePrato12').innerHTML = coracaoDeFrango;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco12 * value12);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco12').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco12.style.textAlign="center";
td_namePetisco12.style.textAlign="center";
td_precoPetisco12.style.textAlign="center";
}
}
}
function mandardados13(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr13").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco13 = document.getElementById('quantPetisco13');
	quantPetisco13.innerText = value13;

	var porco = document.getElementById('porco').firstChild.innerHTML;
	document.getElementById('namePrato13').innerHTML = porco;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco13 * value13);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco13').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

   	if(value13<=0){
		var tr = document.getElementById("tr13");
		tr.parentNode.removeChild(tr); }
	} else {

if (value13>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco13 = document.createElement('td'),
		td_namePetisco13= document.createElement('td'),
		td_precoPetisco13 = document.createElement('td');

	tr.setAttribute("id","tr13");
	td_quantPetisco13.setAttribute("id", "quantPetisco13");
	td_namePetisco13.setAttribute("id", "namePrato13");
	td_precoPetisco13.setAttribute("id", "precoPetisco13");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco13);
	tr.appendChild(td_namePetisco13);
	tr.appendChild(td_precoPetisco13);

	var quantPetisco13 = document.getElementById('quantPetisco13');
	quantPetisco13.innerText = value13;

	var porco = document.getElementById('porco').firstChild.innerHTML;
	document.getElementById('namePrato13').innerHTML = porco;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco13 * value13);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco13').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco13.style.textAlign="center";
td_namePetisco13.style.textAlign="center";
td_precoPetisco13.style.textAlign="center";
}
}
}
function mandardados14(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr14").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco14 = document.getElementById('quantPetisco14');
	quantPetisco14.innerText = value14;

	var caja = document.getElementById('caja').firstChild.innerHTML;
	document.getElementById('namePrato14').innerHTML = caja;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco14 * value14);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco14').innerHTML = mult.toFixed(2);
		document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value14<=0){
		var tr = document.getElementById("tr14");
		tr.parentNode.removeChild(tr); }
    } else {
if (value14>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco14 = document.createElement('td'),
		td_namePetisco14= document.createElement('td'),
		td_precoPetisco14 = document.createElement('td');

	tr.setAttribute("id","tr14");
	td_quantPetisco14.setAttribute("id", "quantPetisco14");
	td_namePetisco14.setAttribute("id", "namePrato14");
	td_precoPetisco14.setAttribute("id", "precoPetisco14");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco14);
	tr.appendChild(td_namePetisco14);
	tr.appendChild(td_precoPetisco14);

	var quantPetisco14 = document.getElementById('quantPetisco14');
	quantPetisco14.innerText = value14;

	var caja = document.getElementById('caja').firstChild.innerHTML;
	document.getElementById('namePrato14').innerHTML = caja;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco14 * value14);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco14').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco14.style.textAlign="center";
td_namePetisco14.style.textAlign="center";
td_precoPetisco14.style.textAlign="center";
}
}
}
function mandardados15(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr15").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco15 = document.getElementById('quantPetisco15');
	quantPetisco15.innerText = value15;

	var laranja = document.getElementById('laranja').firstChild.innerHTML;
	document.getElementById('namePrato15').innerHTML = laranja;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco15 * value15);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco15').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value15<=0){
		var tr = document.getElementById("tr15");
		tr.parentNode.removeChild(tr);}
    } else {
if (value15>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}


	var tr = document.createElement('tr'),
		td_quantPetisco15 = document.createElement('td'),
		td_namePetisco15= document.createElement('td'),
		td_precoPetisco15 = document.createElement('td');

	tr.setAttribute("id","tr15");
	td_quantPetisco15.setAttribute("id", "quantPetisco15");
	td_namePetisco15.setAttribute("id", "namePrato15");
	td_precoPetisco15.setAttribute("id", "precoPetisco15");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco15);
	tr.appendChild(td_namePetisco15);
	tr.appendChild(td_precoPetisco15);

	var quantPetisco15 = document.getElementById('quantPetisco15');
	quantPetisco15.innerText = value15;

	var laranja = document.getElementById('laranja').firstChild.innerHTML;
	document.getElementById('namePrato15').innerHTML = laranja;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco15 * value15);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco15').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco15.style.textAlign="center";
td_namePetisco15.style.textAlign="center";
td_precoPetisco15.style.textAlign="center";
}
}
}
function mandardados16(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');
	if ($("#tr16").length){
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco16 = document.getElementById('quantPetisco16');
	quantPetisco16.innerText = value16;

	var maracuja = document.getElementById('maracuja').firstChild.innerHTML;
	document.getElementById('namePrato16').innerHTML = maracuja;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco16 * value16);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco16').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
	if(value16<=0){
		var tr = document.getElementById("tr16");
		tr.parentNode.removeChild(tr); }
    } else {
if (value16>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco16 = document.createElement('td'),
		td_namePetisco16= document.createElement('td'),
		td_precoPetisco16 = document.createElement('td');

	tr.setAttribute("id","tr16");
	td_quantPetisco16.setAttribute("id", "quantPetisco16");
	td_namePetisco16.setAttribute("id", "namePrato16");
	td_precoPetisco16.setAttribute("id", "precoPetisco16");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco16);
	tr.appendChild(td_namePetisco16);
	tr.appendChild(td_precoPetisco16);

	var quantPetisco16 = document.getElementById('quantPetisco16');
	quantPetisco16.innerText = value16;

	var maracuja = document.getElementById('maracuja').firstChild.innerHTML;
	document.getElementById('namePrato16').innerHTML = maracuja;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco16 * value16);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco16').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco16.style.textAlign="center";
td_namePetisco16.style.textAlign="center";
td_precoPetisco16.style.textAlign="center";
}
}
}
function mandardados17(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr17").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco17 = document.getElementById('quantPetisco17');
	quantPetisco17.innerText = value17;

	var acerola= document.getElementById('acerola').firstChild.innerHTML;
	document.getElementById('namePrato17').innerHTML = acerola;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco17 * value17);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco17').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
	if(value17<=0){
		var tr = document.getElementById("tr17");
		tr.parentNode.removeChild(tr); }
    } else {
if (value17>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco17 = document.createElement('td'),
		td_namePetisco17= document.createElement('td'),
		td_precoPetisco17 = document.createElement('td');

	tr.setAttribute("id","tr17");
	td_quantPetisco17.setAttribute("id", "quantPetisco17");
	td_namePetisco17.setAttribute("id", "namePrato17");
	td_precoPetisco17.setAttribute("id", "precoPetisco17");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco17);
	tr.appendChild(td_namePetisco17);
	tr.appendChild(td_precoPetisco17);

	var quantPetisco17 = document.getElementById('quantPetisco17');
	quantPetisco17.innerText = value17;

	var acerola= document.getElementById('acerola').firstChild.innerHTML;
	document.getElementById('namePrato17').innerHTML = acerola;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco17 * value17);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco17').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco17.style.textAlign="center";
td_namePetisco17.style.textAlign="center";
td_precoPetisco17.style.textAlign="center";
}
}
}
function mandardados18(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr18").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco18 = document.getElementById('quantPetisco18');
	quantPetisco18.innerText = value18;

	var goiaba = document.getElementById('goiaba').firstChild.innerHTML;
	document.getElementById('namePrato18').innerHTML = goiaba;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco18 * value18);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco18').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

	if(value18<=0){
		var tr = document.getElementById("tr18");
		tr.parentNode.removeChild(tr); }
    } else {
if (value18>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco18 = document.createElement('td'),
		td_namePetisco18= document.createElement('td'),
		td_precoPetisco18 = document.createElement('td');

	tr.setAttribute("id","tr18");
	td_quantPetisco18.setAttribute("id", "quantPetisco18");
	td_namePetisco18.setAttribute("id", "namePrato18");
	td_precoPetisco18.setAttribute("id", "precoPetisco18");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco18);
	tr.appendChild(td_namePetisco18);
	tr.appendChild(td_precoPetisco18);

	var quantPetisco18 = document.getElementById('quantPetisco18');
	quantPetisco18.innerText = value18;

	var goiaba = document.getElementById('goiaba').firstChild.innerHTML;
	document.getElementById('namePrato18').innerHTML = goiaba;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco18 * value18);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco18').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco18.style.textAlign="center";
td_namePetisco18.style.textAlign="center";
td_precoPetisco18.style.textAlign="center";
}
}
}
function mandardados19(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr19").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco19 = document.getElementById('quantPetisco19');
	quantPetisco19.innerText = value19;

	var jarra= document.getElementById('jarra').firstChild.innerHTML;
	document.getElementById('namePrato19').innerHTML = jarra;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco19 * value19);

document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco19').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
    	if(value19<=0){
		var tr = document.getElementById("tr19");
		tr.parentNode.removeChild(tr); }
     }else {
if (value19>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}


	var tr = document.createElement('tr'),
		td_quantPetisco19 = document.createElement('td'),
		td_namePetisco19= document.createElement('td'),
		td_precoPetisco19 = document.createElement('td');

	tr.setAttribute("id","tr19");
	td_quantPetisco19.setAttribute("id", "quantPetisco19");
	td_namePetisco19.setAttribute("id", "namePrato19");
	td_precoPetisco19.setAttribute("id", "precoPetisco19");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco19);
	tr.appendChild(td_namePetisco19);
	tr.appendChild(td_precoPetisco19);

	var quantPetisco19 = document.getElementById('quantPetisco19');
	quantPetisco19.innerText = value19;

	var jarra= document.getElementById('jarra').firstChild.innerHTML;
	document.getElementById('namePrato19').innerHTML = jarra;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco19 * value19);

document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco19').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco19.style.textAlign="center";
td_namePetisco19.style.textAlign="center";
td_precoPetisco19.style.textAlign="center";
}
}
}
function mandardados20(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr20").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco20 = document.getElementById('quantPetisco20');
	quantPetisco20.innerText = value20;

	var cocaCola = document.getElementById('cocaCola').firstChild.innerHTML;
	document.getElementById('namePrato20').innerHTML = cocaCola;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco20 * value20);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco20').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value20<=0){
		var tr = document.getElementById("tr20");
		tr.parentNode.removeChild(tr); }
    } else {
if (value20>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco20 = document.createElement('td'),
		td_namePetisco20= document.createElement('td'),
		td_precoPetisco20 = document.createElement('td');

	tr.setAttribute("id","tr20");
	td_quantPetisco20.setAttribute("id", "quantPetisco20");
	td_namePetisco20.setAttribute("id", "namePrato20");
	td_precoPetisco20.setAttribute("id", "precoPetisco20");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco20);
	tr.appendChild(td_namePetisco20);
	tr.appendChild(td_precoPetisco20);

	var quantPetisco20 = document.getElementById('quantPetisco20');
	quantPetisco20.innerText = value20;

	var cocaCola = document.getElementById('cocaCola').firstChild.innerHTML;
	document.getElementById('namePrato20').innerHTML = cocaCola;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco20 * value20);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco20').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco20.style.textAlign="center";
td_namePetisco20.style.textAlign="center";
td_precoPetisco20.style.textAlign="center";
}
}
}
function mandardados21(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

    					 if ($("#tr21").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco21 = document.getElementById('quantPetisco21');
	quantPetisco21.innerText = value21;

	var guarana = document.getElementById('guarana').firstChild.innerHTML;
	document.getElementById('namePrato21').innerHTML = guarana;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco21 * value21);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco21').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value21<=0){
		var tr = document.getElementById("tr21");
		tr.parentNode.removeChild(tr);}
    } else {
if (value21>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco21 = document.createElement('td'),
		td_namePetisco21= document.createElement('td'),
		td_precoPetisco21 = document.createElement('td');

	tr.setAttribute("id","tr21");
	td_quantPetisco21.setAttribute("id", "quantPetisco21");
	td_namePetisco21.setAttribute("id", "namePrato21");
	td_precoPetisco21.setAttribute("id", "precoPetisco21");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco21);
	tr.appendChild(td_namePetisco21);
	tr.appendChild(td_precoPetisco21);

	var quantPetisco21 = document.getElementById('quantPetisco21');
	quantPetisco21.innerText = value21;

	var guarana = document.getElementById('guarana').firstChild.innerHTML;
	document.getElementById('namePrato21').innerHTML = guarana;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco21 * value21);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco21').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco21.style.textAlign="center";
td_namePetisco21.style.textAlign="center";
td_precoPetisco21.style.textAlign="center";
}
}
}
function mandardados22(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr22").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco22 = document.getElementById('quantPetisco22');
	quantPetisco22.innerText = value22;

	var fanta = document.getElementById('fanta').firstChild.innerHTML;
	document.getElementById('namePrato22').innerHTML = fanta;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco22 * value22);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco22').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value22<=0){
		var tr = document.getElementById("tr22");
		tr.parentNode.removeChild(tr); }
    } else {
if (value22>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco22 = document.createElement('td'),
		td_namePetisco22= document.createElement('td'),
		td_precoPetisco22 = document.createElement('td');

	tr.setAttribute("id","tr22");
	td_quantPetisco22.setAttribute("id", "quantPetisco22");
	td_namePetisco22.setAttribute("id", "namePrato22");
	td_precoPetisco22.setAttribute("id", "precoPetisco22");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco22);
	tr.appendChild(td_namePetisco22);
	tr.appendChild(td_precoPetisco22);

	var quantPetisco22 = document.getElementById('quantPetisco22');
	quantPetisco22.innerText = value22;

	var fanta = document.getElementById('fanta').firstChild.innerHTML;
	document.getElementById('namePrato22').innerHTML = fanta;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco22 * value22);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco22').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco22.style.textAlign="center";
td_namePetisco22.style.textAlign="center";
td_precoPetisco22.style.textAlign="center";
}
}
}

function mandardados23(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr23").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco23 = document.getElementById('quantPetisco23');
	quantPetisco23.innerText = value23;

	var aguaMineral = document.getElementById('aguaMineral').firstChild.innerHTML;
	document.getElementById('namePrato23').innerHTML = aguaMineral;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco23 * value23);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco23').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value23<=0){
		var tr = document.getElementById("tr23");
		tr.parentNode.removeChild(tr);}
    } else {
if (value23>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco23 = document.createElement('td'),
		td_namePetisco23= document.createElement('td'),
		td_precoPetisco23 = document.createElement('td');

	tr.setAttribute("id","tr23");
	td_quantPetisco23.setAttribute("id", "quantPetisco23");
	td_namePetisco23.setAttribute("id", "namePrato23");
	td_precoPetisco23.setAttribute("id", "precoPetisco23");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco23);
	tr.appendChild(td_namePetisco23);
	tr.appendChild(td_precoPetisco23);

	var quantPetisco23 = document.getElementById('quantPetisco23');
	quantPetisco23.innerText = value23;

	var aguaMineral = document.getElementById('aguaMineral').firstChild.innerHTML;
	document.getElementById('namePrato23').innerHTML = aguaMineral;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco23 * value23);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco23').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco23.style.textAlign="center";
td_namePetisco23.style.textAlign="center";
td_precoPetisco23.style.textAlign="center";
}
}
}
function mandardados24(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr24").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco24 = document.getElementById('quantPetisco24');
	quantPetisco24.innerText = value24;

	var skol = document.getElementById('skol').firstChild.innerHTML;
	document.getElementById('namePrato24').innerHTML = skol;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco24 * value24);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco24').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value24<=0){
		var tr = document.getElementById("tr24");
		tr.parentNode.removeChild(tr); }
    } else {
if (value24>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}


	var tr = document.createElement('tr'),
		td_quantPetisco24 = document.createElement('td'),
		td_namePetisco24= document.createElement('td'),
		td_precoPetisco24 = document.createElement('td');

	tr.setAttribute("id","tr24");
	td_quantPetisco24.setAttribute("id", "quantPetisco24");
	td_namePetisco24.setAttribute("id", "namePrato24");
	td_precoPetisco24.setAttribute("id", "precoPetisco24");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco24);
	tr.appendChild(td_namePetisco24);
	tr.appendChild(td_precoPetisco24);

	var quantPetisco24 = document.getElementById('quantPetisco24');
	quantPetisco24.innerText = value24;

	var skol = document.getElementById('skol').firstChild.innerHTML;
	document.getElementById('namePrato24').innerHTML = skol;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco24 * value24);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco24').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco24.style.textAlign="center";
td_namePetisco24.style.textAlign="center";
td_precoPetisco24.style.textAlign="center";
}
}
}
function mandardados25(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr25").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco25 = document.getElementById('quantPetisco25');
	quantPetisco25.innerText = value25;

	var itaipava= document.getElementById('itaipava').firstChild.innerHTML;
	document.getElementById('namePrato25').innerHTML = itaipava;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco25 * value25);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco25').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
	if(value25<=0){
		var tr = document.getElementById("tr25");
		tr.parentNode.removeChild(tr); }
    } else {
if (value25>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco25 = document.createElement('td'),
		td_namePetisco25= document.createElement('td'),
		td_precoPetisco25 = document.createElement('td');

	tr.setAttribute("id","tr25");
	td_quantPetisco25.setAttribute("id", "quantPetisco25");
	td_namePetisco25.setAttribute("id", "namePrato25");
	td_precoPetisco25.setAttribute("id", "precoPetisco25");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco25);
	tr.appendChild(td_namePetisco25);
	tr.appendChild(td_precoPetisco25);

	var quantPetisco25 = document.getElementById('quantPetisco25');
	quantPetisco25.innerText = value25;

	var itaipava= document.getElementById('itaipava').firstChild.innerHTML;
	document.getElementById('namePrato25').innerHTML = itaipava;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco25 * value25);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco25').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco25.style.textAlign="center";
td_namePetisco25.style.textAlign="center";
td_precoPetisco25.style.textAlign="center";
}
}
}
function mandardados26(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr26").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco26 = document.getElementById('quantPetisco26');
	quantPetisco26.innerText = value26;

	var original = document.getElementById('original').firstChild.innerHTML;
	document.getElementById('namePrato26').innerHTML = original;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco26 * value26);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco26').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
	if(value26<=0){
		var tr = document.getElementById("tr26");
		tr.parentNode.removeChild(tr); }
    } else {
if (value26>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco26 = document.createElement('td'),
		td_namePetisco26= document.createElement('td'),
		td_precoPetisco26 = document.createElement('td');

	tr.setAttribute("id","tr26");
	td_quantPetisco26.setAttribute("id", "quantPetisco26");
	td_namePetisco26.setAttribute("id", "namePrato26");
	td_precoPetisco26.setAttribute("id", "precoPetisco26");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco26);
	tr.appendChild(td_namePetisco26);
	tr.appendChild(td_precoPetisco26);

	var quantPetisco26 = document.getElementById('quantPetisco26');
	quantPetisco26.innerText = value26;

	var original = document.getElementById('original').firstChild.innerHTML;
	document.getElementById('namePrato26').innerHTML = original;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco26 * value26);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco26').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco26.style.textAlign="center";
td_namePetisco26.style.textAlign="center";
td_precoPetisco26.style.textAlign="center";
}
}
}
function mandardados27(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr27").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco27 = document.getElementById('quantPetisco27');
	quantPetisco27.innerText = value27;

	var burdweiser= document.getElementById('burdweiser').firstChild.innerHTML;
	document.getElementById('namePrato27').innerHTML = burdweiser;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco27 * value27);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco27').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
	if(value27<=0){
		var tr = document.getElementById("tr27");
		tr.parentNode.removeChild(tr); }
    } else {
if (value27>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}


	var tr = document.createElement('tr'),
		td_quantPetisco27 = document.createElement('td'),
		td_namePetisco27= document.createElement('td'),
		td_precoPetisco27= document.createElement('td');

	tr.setAttribute("id","tr27");
	td_quantPetisco27.setAttribute("id", "quantPetisco27");
	td_namePetisco27.setAttribute("id", "namePrato27");
	td_precoPetisco27.setAttribute("id", "precoPetisco27");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco27);
	tr.appendChild(td_namePetisco27);
	tr.appendChild(td_precoPetisco27);

	var quantPetisco27 = document.getElementById('quantPetisco27');
	quantPetisco27.innerText = value27;

	var burdweiser= document.getElementById('burdweiser').firstChild.innerHTML;
	document.getElementById('namePrato27').innerHTML = burdweiser;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco27 * value27);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco27').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco27.style.textAlign="center";
td_namePetisco27.style.textAlign="center";
td_precoPetisco27.style.textAlign="center";
}
}
}
function mandardados28(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr28").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco28 = document.getElementById('quantPetisco28');
	quantPetisco28.innerText = value28;

	var eisenbahn = document.getElementById('eisenbahn').firstChild.innerHTML;
	document.getElementById('namePrato28').innerHTML = eisenbahn;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco28 * value28);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco28').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);
	if(value28<=0){
		var tr = document.getElementById("tr28");
		tr.parentNode.removeChild(tr); }
    } else {
if (value28>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco28 = document.createElement('td'),
		td_namePetisco28= document.createElement('td'),
		td_precoPetisco28 = document.createElement('td');

	tr.setAttribute("id","tr28");
	td_quantPetisco28.setAttribute("id", "quantPetisco28");
	td_namePetisco28.setAttribute("id", "namePrato28");
	td_precoPetisco28.setAttribute("id", "precoPetisco28");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco28);
	tr.appendChild(td_namePetisco28);
	tr.appendChild(td_precoPetisco28);

	var quantPetisco28 = document.getElementById('quantPetisco28');
	quantPetisco28.innerText = value28;

	var eisenbahn = document.getElementById('eisenbahn').firstChild.innerHTML;
	document.getElementById('namePrato28').innerHTML = eisenbahn;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco28 * value28);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco28').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco28.style.textAlign="center";
td_namePetisco28.style.textAlign="center";
td_precoPetisco28.style.textAlign="center";
}
}
}
function mandardados29(){

	var value1 = document.getElementById('quantPet1').value,
				value2 = document.getElementById('quantPet2').value,
				value3 = document.getElementById('quantPet3').value,
				value4 = document.getElementById('quantPet4').value,
				value5 = document.getElementById('quantPet5').value,
				value6 = document.getElementById('quantPet6').value,
				value7 = document.getElementById('quantPet7').value,
				value8 = document.getElementById('quantPet8').value,
				value9 = document.getElementById('quantPet9').value,
				value10 = document.getElementById('quantPet10').value,
				value11 = document.getElementById('quantPet11').value,
				value12 = document.getElementById('quantPet12').value,
				value13 = document.getElementById('quantPet13').value,
				value14 = document.getElementById('quantPet14').value,
				value15 = document.getElementById('quantPet15').value,
				value16 = document.getElementById('quantPet16').value,
				value17 = document.getElementById('quantPet17').value,
				value18 = document.getElementById('quantPet18').value,
				value19 = document.getElementById('quantPet19').value,
				value20 = document.getElementById('quantPet20').value,
				value21 = document.getElementById('quantPet21').value,
				value22 = document.getElementById('quantPet22').value,
				value23 = document.getElementById('quantPet23').value,
				value24 = document.getElementById('quantPet24').value,
				value25 = document.getElementById('quantPet25').value,
				value26 = document.getElementById('quantPet26').value,
				value27 = document.getElementById('quantPet27').value,
				value28 = document.getElementById('quantPet28').value,
				value29 = document.getElementById('quantPet29').value,
				trbody = document.getElementById('tablePedidos');

								 if ($("#tr29").length){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var quantPetisco29 = document.getElementById('quantPetisco29');
	quantPetisco29.innerText = value29;

	var heineken = document.getElementById('heineken').firstChild.innerHTML;
	document.getElementById('namePrato29').innerHTML = heineken;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco29 * value29);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco29').innerHTML = mult.toFixed(2);
document.getElementById('totalValue').innerHTML = result.toFixed(2);
		if(value29<=0){
		var tr = document.getElementById("tr29");
		tr.parentNode.removeChild(tr); }
    } else {
if (value29>=1){
	if (value1 == 0){var preco1 = 0;} else {preco1 = 13.00;}
	if (value2 == 0){var preco2 = 0;} else {preco2 = 25.00;}
	if (value3 == 0){var preco3 = 0;} else {preco3 = 15.00;}
	if (value4 == 0){var preco4 = 0;} else {preco4 = 20.00;}
	if (value5 == 0){var preco5 = 0;} else {preco5 = 10.00;}
	if (value6 == 0){var preco6 = 0;} else {preco6 = 10.00;}
	if (value7 == 0){var preco7 = 0;} else {preco7 = 6.00;}
	if (value8 == 0){var preco8 = 0;} else {preco8 = 10.00;}
	if (value9 == 0){var preco9 = 0;} else {preco9 = 4.00;}
	if (value10 == 0){var preco10 = 0;} else {preco10 = 4.00;}
	if (value11 == 0){var preco11 = 0;} else {preco11 = 4.00;}
	if (value12 == 0){var preco12 = 0;} else {preco12 = 4.00;}
	if (value13 == 0){var preco13 = 0;} else {preco13 = 4.00;}
	if (value14 == 0){var preco14 = 0;} else {preco14= 3.00;}
	if (value15 == 0){var preco15 = 0;} else {preco15 = 3.00;}
	if (value16 == 0){var preco16 = 0;} else {preco16 = 3.00;}
	if (value17 == 0){var preco17 = 0;} else {preco17 = 3.00;}
	if (value18 == 0){var preco18 = 0;} else {preco18 = 3.00;}
	if (value19 == 0){var preco19 = 0;} else {preco19 = 10.00;}
	if (value20 == 0){var preco20 = 0;} else {preco20 = 3.50;}
	if (value21 == 0){var preco21 = 0;} else {preco21 = 3.50;}
	if (value22 == 0){var preco22 = 0;} else {preco22 = 3.50;}
	if (value23 == 0){var preco23 = 0;} else {preco23 = 1.50;}
	if (value24 == 0){var preco24 = 0;} else {preco24 = 3.00;}
	if (value25 == 0){var preco25 = 0;} else {preco25 = 3.00;}
	if (value26 == 0){var preco26 = 0;} else {preco26 = 5.00;}
	if (value27 == 0){var preco27 = 0;} else {preco27 = 6.00;}
	if (value28 == 0){var preco28 = 0;} else {preco28 = 6.00;}
	if (value29 == 0){var preco29 = 0;} else {preco29 = 6.00;}

	var tr = document.createElement('tr'),
		td_quantPetisco29 = document.createElement('td'),
		td_namePetisco29= document.createElement('td'),
		td_precoPetisco29 = document.createElement('td');

	tr.setAttribute("id","tr29");
	td_quantPetisco29.setAttribute("id", "quantPetisco29");
	td_namePetisco29.setAttribute("id", "namePrato29");
	td_precoPetisco29.setAttribute("id", "precoPetisco29");

	trbody.appendChild(tr);
	tr.appendChild(td_quantPetisco29);
	tr.appendChild(td_namePetisco29);
	tr.appendChild(td_precoPetisco29);

	var quantPetisco29 = document.getElementById('quantPetisco29');
	quantPetisco29.innerText = value29;

	var heineken = document.getElementById('heineken').firstChild.innerHTML;
	document.getElementById('namePrato29').innerHTML = heineken;

	var result = ((preco1 * value1) + (preco2 * value2) + (preco3 * value3) + (preco4 * value4) +
		(preco5 * value5) + (preco6 * value6) + (preco7 * value7) + (preco8 * value8) +
		(preco9 * value9) + (preco10 * value10) + (preco11 * value11) + (preco12 * value12) +
		(preco13 * value13) + (preco14 * value14) + (preco15 * value15) + (preco16 * value16) +
		(preco17 * value17) + (preco18 * value18) + (preco19 * value19) + (preco20 * value20) +
		(preco21 * value21) + (preco22 * value22) + (preco23 * value23) + (preco24 * value24) +
		(preco25 * value25) + (preco26 * value26) + (preco27 * value27) + (preco28 * value28) +
		(preco29 * value29));
	var mult = (preco29 * value29);
document.getElementById('preco-subtotal').innerHTML = result.toFixed(2);
	document.getElementById('precoPetisco29').innerHTML = mult.toFixed(2);
	document.getElementById('totalValue').innerHTML = result.toFixed(2);

td_quantPetisco29.style.textAlign="center";
td_namePetisco29.style.textAlign="center";
td_precoPetisco29.style.textAlign="center";
}
}
}

