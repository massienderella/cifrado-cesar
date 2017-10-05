## Cifrado César

##### Objetivo: Crea una web que pida, por medio de un ```prompt()```, una frase al usuario y que devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

* Crear función que consulte al usuario a través de un prompt() si desea cifrar o descifrar un mensaje. Si la opción no corresponde a 1 (cifrar) o 2 (descifrar) se le pedirá al usuario mediante un alert() que ingrese una opción válida
* Se valida que el mensaje entregado para cifrar o descifrar sean solo palabras y que no haya espacios vacíos
* Una vez validado el mensaje, se activa la función escogida

__Para ```cipher```:__

1. El mensaje se almacena en la ```var message```, a través de un ```prompt()```

2. Se crea una nueva ```var```, llamada ```codedMessage```, en donde se almacenará cada nuevo caracter cifrado

3. A través de un ```for``` se recorre cada letra del mensaje. A partir del índice 0 se itera avanzando una vez hasta que i sea menor a la longitud del mensaje

4. Mediante ```charCodeAt()``` se busca el código ASCII de cada letra del mensaje EN MAYÚSCULA.

5. Si el código del caracter es mayor o igual a 65 y menor o igual a 90, se procederá a aplicar la siguiente fórmula ((character - 65 + 7) % 26) + 65, que es usada para calcular el código de la nueva letra mediante el Cifrado César. Al sumarle + 7 nos referimos a que la letra original avanzará 7 posiciones.

6. Mediante ```String.fromCharCode()``` convertimos el código ASCII obtenido a una letra del alfabeto en mayúscula, luego se agrega a la variable codedMessage 

7. Nuevamente, mediante ```charCodeAt()``` se busca el código ASCII de cada letra del mensaje EN MINÚSCULA.

8. No obstante, si el código del caracter es mayor o igual a 97 y menor o igual a 122, se procederá a aplicar la siguiente fórmula ((character - 97 + 7 + 78) % 26) + 97, que es usada para calcular el código de la nueva letra mediante el Cifrado César. Al sumarle + 7 nos referimos a que la letra original avanzará 7 posiciones. 

9. Mediante ```String.fromCharCode()``` convertimos el código ASCII obtenido a una letra del alfabeto en minúscula, luego se agrega a la ```var codedMessage```

10. Finalmente, se retorna al usuario el mensaje cifrado mediante un ```alert()```


__Para ```decipher```:__


1. El mensaje se almacena en la variable message, a través de un ```prompt()```

2. Se crea una nueva ```var```, llamada ```codedMessage```, en donde se almacenará cada nuevo caracter descifrado

3. A través de un ```for``` se recorre cada letra del mensaje. A partir del índice 0 se itera avanzando una vez hasta que i sea menor a la longitud del mensaje

4. Mediante ```charCodeAt()``` se busca el código ASCII de cada letra del mensaje EN MAYÚSCULA.

5. Si el código del caracter es mayor o igual a 65 y menor o igual a 90, se procederá a aplicar la siguiente fórmula ((character - 65 - 7) % 26) + 65, que es usada para calcular el código de la nueva letra mediante el Cifrado César. Al restarle - 7 nos referimos a que la letra original retrocederá 7 posiciones.

6. Mediante ```String.fromCharCode()``` convertimos el código ASCII obtenido a una letra del alfabeto en mayúscula, luego se agrega a la variable codedMessage 

7. Nuevamente, mediante ```charCodeAt()``` se busca el código ASCII de cada letra del mensaje EN MINÚSCULA.

8. No obstante, si el código del caracter es mayor o igual a 97 y menor o igual a 122, se procederá a aplicar la siguiente fórmula ((character - 97 - 7 + 78) % 26) + 97, que es usada para calcular el código de la nueva letra mediante el Cifrado César. Al restarle - 7 nos referimos a que la letra original retrocederá 7 posiciones.

9. Mediante ```String.fromCharCode()``` convertimos el código ASCII obtenido a una letra del alfabeto en minúscula, luego se agrega a la ```var codedMessage``` 

10. Finalmente, se retorna al usuario el mensaje descifrado mediante un ```alert()```
