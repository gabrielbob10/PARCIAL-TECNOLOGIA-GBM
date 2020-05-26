//se declara la funcion que sumara y restara 4 numeros
function punto1(a,s,d,f) {
	//se declaran variables
	var suma =0;
	var resta= 0;
	var n=a,n1=s,n2=d,n3=f;
	//se plantean la operaciones
	suma = parseInt(n) + parseInt(n1);
	resta = parseInt(n2) - parseInt(n3);
	alert("el resutado de la suma es "+suma);
	alert("el resultado de la resta es "+resta)
}

//se declara la funcion que que reibira un numero por parametro y devolvera los primeros 100 numeros primos
function mul(a) {
	//se declaran variables
	var num = a;
	var res;
	var multiplos = [];
	//se plantea un for para averiguar que numeros entre 1 y 100 son multiplos del numero
	for (var i =1; i <=100; i++) {
		//para saber si es multiplo se hace una operacion de MOD
		res =  i %  parseInt(num);
		//si el resultado del MOD es igual a cero es un multiplo del numero
		if (res == 0) {
			multiplos.push(i);
		}
	}
	document.write("Los multiplos de "+ num +" son: ", multiplos);
}
function numero_cifras(a) {
	 var respuesta= a.toString().length;
	 alert("la cantidad  de carateres es de "+respuesta+ " del numero " +a);
}

//se declara la funcion que va a comprobar si lo que uno ingresa es numero o letras
function comprobacion(e) {
	 var numeros="0123456789";

function tiene_numeros(texto){
   for(i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
      	//si retorna 1 es que encontro numeros en el texto
         return 1;
      }
   }
   //si retorna 0 solo contiene letras
   return 0;
}
}


//se hace el llamado de las funciones
punto1(23,40,32,10);
mul(3);
numero_cifras(253)
//alert(tiene_numeros("ASAS1"));