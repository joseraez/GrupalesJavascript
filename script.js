function addPasajeros(){
	
	//LIMPIAMOS LOS HIJOS CREADOS ANTERIORMENTE
	cleanChilds();

	var npasajeros = document.getElementById("npasaj").value;

	posicion = document.getElementsByTagName("form")[0];	
	//SALTO DE LINEA ANTES DE AÑADIR MAS CAMPOS
	var br=document.createElement("br");
	posicion.appendChild(br);

	
	posicion = document.getElementById("pasajeros");

if(npasajeros>0){
	for(var i=0;i<npasajeros;i++){
		var br=document.createElement("br");

		var textoNombre=document.createElement("p");
		var inputNombre = document.createElement("input");
		inputNombre.setAttribute("type","text");
		inputNombre.setAttribute("name","nombreyapes");

		var textoDni=document.createElement("p");
		var inputDni = document.createElement("input");
		inputDni.setAttribute("type","text");
		inputDni.setAttribute("name","dni");

		var textoCredito = document.createElement("p");
		var inputCredito = document.createElement("input");
		inputCredito.setAttribute("type","text");	
		inputCredito.setAttribute("name","credito");	
		
		posicion.appendChild(textoNombre);
		posicion.appendChild(inputNombre);
		posicion.appendChild(textoDni);
		posicion.appendChild(inputDni);
		posicion.appendChild(textoCredito);
		posicion.appendChild(inputCredito);

		textoCredito.innerHTML="Tarjeta de credito: ";
		textoDni.innerHTML="DNI: ";
		textoNombre.innerHTML="Nombre y apellidos: ";

		//SALTO LINEA

		posicion.appendChild(br);
	}
}

	var submit = document.createElement("input");
	submit.setAttribute("type","submit");
	submit.setAttribute("onclick","validate()");
	submit.setAttribute("name","boton");
	posicion.appendChild(submit);
	
}

function validate(){

	var arrayDni = document.getElementsByName("dni");
	var arrayCreditos = document.getElementsByName("credito");

	for(var i=0;i<arrayDni.length;i++){
		if(!(nif(arrayDni[i].value))){
			alert("Formato del dni es incorrecto.");
		}
	}

	for(var j=0;j<arrayCreditos.length;j++){
		if(!(tarjetasDeCredito(arrayCreditos[i].value))){
			alert("Formato de tarjeta de credito incorrecto.")
		}
	}
}

function nif(dni) {
  var numero;
  var letr;
  var letra;
  var expresion_regular_dni;
  var esCorrecto;

  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra="TRWAGMYFPDXBNJZSQVHLCKET";
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       esCorrecto=false;
     }else{
       esCorrecto=true;
     }
  }else{
     esCorrecto=false;
   }
   return esCorrecto;
}

function tarjetasDeCredito(tarjeta){

	var esCorrecto = true;

	//formato de las tarjetas visa
	if (!tarjeta.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/)){
	  esCorrecto = false;
	}
	 
	 //formato de las tarjetas mastercard
	if (!tarjeta.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/)){
	  esCorrecto = false;
	}

	return esCorrecto;

}

function cleanChilds(){

	var div = document.getElementById("pasajeros");

	while(div.hasChildNodes()){
		div.removeChild(div.lastChild);
	}
	


}