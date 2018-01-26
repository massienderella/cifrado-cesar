/* function caesarCipher(){
  do{
  var respuesta = prompt("Ingrese 1 si desea cifrar o 2 si desea descifrar")
  var wordCondition = /^[A-z\s]*$/;
    if(!wordCondition.test(word)){
      alert("Ingrese sólo caracteres de A-Z")
    }
    if(word == ""){
      alert("Ingrese una palabra con caracteres solo de A-Z")
    }
        
  } while(wordCondition.test(word) == false || word == "");*/

function choose() {
  do {
    var respuesta = prompt('Ingrese 1 si desea cifrar o 2 si desea descifrar');
    if (respuesta !== '') {
      if (respuesta === '1') {
        cipher();
      } else if (respuesta === '2') {
        decipher();
      } else {
        alert('Ingrese una opción válida');
      }
    }
  } while (respuesta === '' || (respuesta !== '1' && respuesta !== '2'));
}

choose();

function cipher(message) { // función
  var message = prompt('Ingresa el mensaje a cifrar'); // variable en la que se almacena el mensaje a cifrar
  var codedMessage = ''; // var vacío al que se agregará el mensaje codificado
  for (var i = 0; i < message.length ; i++) { // for para recorrer cada letra del mensaje
    character = message.charCodeAt(i); // para trabajar sobre cada caracter
    if (character >= 65 && character <= 90) { // si el caracter se encuentra dentro del rango ASCII
      var toCipher = ((character - 65 + 7) % 26) + 65; // se cifra con esta fórmula PARA MAYUSCULA
      codedMessage += String.fromCharCode(toCipher); // a la variable codedMessage se agrega cada caracter codificado
    } else if (character >= 97 && character <= 122) { //
      var toCipher = ((character - 97 + 7) % 26) + 97; // se cifra con esta fórmula PARA MINUSCULA
      codedMessage += String.fromCharCode(toCipher); // a la variable codedMessage se agrega cada caracter codificado  
    }
  }
  return alert(codedMessage); // se retorna el nuevo mensaje a través de un alert
}


function decipher(message) { // función
  var message = prompt('Ingresa el mensaje a descifrar'); // variable en la que se almacena el mensaje a descifrar
  var decodedMessage = ''; // var vacío al que se agregará el mensaje codificado
  for (var i = 0; i < message.length ; i++) { // for para recorrer cada letra del mensaje
    character = message.charCodeAt(i); // para trabajar sobre cada caracter
    if (character >= 65 && character <= 90) { // si el caracter se encuentra dentro del rango ASCII
      var toCipher = ((character - 65 - 7 + 52) % 26) + 65; // se cifra con esta fórmula PARA MAYUSCULA
      decodedMessage += String.fromCharCode(toCipher); // a la variable codedMessage se agrega cada caracter codificado
    } else if (character >= 97 && character <= 122) {
      var toCipher = ((character - 97 - 7 + 78) % 26) + 97; // se cifra con esta fórmula PARA MINUSCULA
      decodedMessage += String.fromCharCode(toCipher); // a la variable codedMessage se agrega cada caracter codificado  
    }
  }
  return alert(decodedMessage); // se retorna el nuevo mensaje
}