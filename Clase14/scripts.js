const btn = document.getElementById("start");
btn.addEventListener("click", function () {
  let x;
  while (true) {
    x = parseInt(
      prompt(
        "Ingrese el ejercicio que quires hacer \n 1. Edad \n 2. Figuras \n 3. Par o impar \n 4. Numero primo" +
          "\n 5. Factorial \n 6. No más de 50  \n 7. Array par o impar \n 8. Letra correspondiente \n 9. Nombre \n 10. Colores \n 0. Salir"
      )
    );
    if (x <= 10) {
      break;
    }
    if (x == 0) {
      alert("Se presionó CANCEL");
      break;
    }
  }
  switch (x) {
    case 1:
      /*1 - Solicita un nombre, la edad y muestra por consola el mensaje 
      "Hola ____, tienes ____ años y el año que viene tendrás ____ años" */
      var nombre = prompt("Como te llamas?");
      var edad = prompt("Cuantos años tienes?");
      var edad1 = parseInt(edad) + 1;

      if (!isNaN(edad)) {
        alert(
          "Hola " +
            nombre +
            " tienes " +
            edad +
            " años y el año que viene tendrás " +
            edad1 +
            " años"
        );
      }
      break;
    case 2:
      /*
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo,
 rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área,
  después solicita los datos que necesites para calcularlo. */
      var figura = parseInt(
        prompt(
          "Ingrese la figura que desea calcular el area: 1. Triangulo - 2. Rectangulo - 3. Circulo  "
        )
      );

      switch (figura) {
        case 1:
          var base = parseFloat(prompt("Ingrese la base del triangulo (cm)"));
          var altura = parseFloat(
            prompt("Ingrese la altura del triangulo (cm)")
          );

          var area = (base * altura) / 2;

          alert("El area del triangulo es: "+ area + " cm^2");
          break;

        case 2:
          var base = parseFloat(prompt("Ingrese la base del Rectangulo (cm)"));
          var altura = parseFloat(
            prompt("Ingrese la altura del Rectangulo (cm)")
          );

          var area = base * altura;

          alert("El area del Rectangulo es: " + area + " cm^2");
          break;

        case 3:
          var radio = parseFloat(prompt("Ingrese el radio del circulo (cm)"));

          var area = Math.PI * Math.pow(radio, 2);

          alert("El area del circulo es: "+ area+ " cm^2");
          break;
      }
      break;
    case 3:
      /*3 - Solicita un número e imprime todos los números pares e impares desde 1 
    hasta ese número con el mensaje "es par" o "es impar" */
      let n = prompt("Ingrese el limite de numeros");
      let text = "";
      /* Para imprimir un dato se puede usar console.log(dato) */
      for (var i = 1; i <= n; i++) {
        if (i % 2 == 0) {
          text += i + " es par\n";
        } else {
          text += i + " es impar\n";
        }
      }
      alert(text);
      break;
    case 4:
      /*4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
        Un número primo es aquel que solo es divisible por sí mismo y la unidad
     */
      let p = parseInt(prompt("Ingrese el numero que quiere comprobar"));
      if (p > 1) {
        let check = true;
        var i = 0;
        for (i = 2; i < p; i++) {
          if (Number.isInteger(p) && p % i == 0) {
            check = false;
          }
        }
        if (check == true) {
          alert(p + " es primo");
        } else {
          alert(p + " no es primo");
        }
      } else {
        alert(p + " ya es primo");
      }
      break;
    case 5:
      // 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
      // El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
      let numero = parseInt(prompt("Ingrese el numero que quiere comprobar"));
      let num = 1;
      if (numero > 0) {
        for (var i = 1; i <= numero; i++) {
          num *= i;
        }
        alert("El factorial de " + numero + " es " + num);
      } else {
        alert("El factorial de " + numero + " es " + 1);
      }
      break;
    case 6:
      /*
6 - Escribe un programa que permita ir introduciendo una serie indeterminadade
números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total
 acumulado y el contador de cuantos números se han introducido */
      let acum = 0,
        nume = 0,
        cont = 0;
      while (acum < 50) {
        nume = parseInt(prompt("Ingrese un numero"));
        if (nume >= 50) {
          alert("El numero es " + nume + ", no sé puede superar el 50");
          break;
        } else {
          acum += nume;
          cont++;
        }
      }
      if (acum > 50) {
        acum -= nume;
        alert("El total es: " + acum);
        alert("El numero de veces que se ingresó un numero fue: " + (cont - 1));
      } else if (acum == 50) {
        alert("El total es: " + acum);
        alert("El numero de veces que se ingresó un numero fue: " + cont);
      }
      break;
    case 7:
      /*
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, 
ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio
entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array
de impares.
*/
      let rand = [1, 1, 1, 1, 1];
      let randx = rand.map(
        (rand) => rand * Math.floor(Math.random() * (10 - 1) + 1)
      );
      let array1 = [1, 2, 3, 4, 5];
      let array2 = [];
      let array3 = [];
      let array1m = [];
      for (var j = 0; j < array1.length; j++) {
        array1m[j] = array1[j] * randx[j];
        alert(
          "La multiplicación que se produce con" +
            array1[j] +
            "x" +
            randx[j] +
            " es " +
            array1m[j]
        );
      }
      alert("El array completo es: " + array1m);
      let c = 0,
        cx = 0;
      for (var i = 0; i < array1m.length; i++) {
        if (array1m[i] % 2 == 0) {
          array2[c] = array1m[i];
          c++;
        } else {
          array3[cx] = array1m[i];
          cx++;
        }
      }
      alert("El array de pares es: " + array2);
      alert("El array de impares es: " + array3);
      break;
    case 8:
      /*8 - Dado un array de letras, solicita un número de DNI y calcula que letra
       le corresponde. El número no puede ser negativo ni tener más de 8 dígitos.
        La posición de la letra es el resultado del módulo del número introducido entre 23 */
      const letras = [
        "T",
        "R",
        "W",
        "A",
        "G",
        "M",
        "Y",
        "F",
        "P",
        "D",
        "X",
        "B",
        "N",
        "J",
        "Z",
        "S",
        "Q",
        "V",
        "H",
        "L",
        "C",
        "K",
        "E",
        "T",
      ];

      var ced = prompt("Ingrese su cedula");
      let numer = parseInt(ced);
      let pos = "";
      if (numer >= 0 && ced.length <= 8) {
        var res = numer % 23;
        pos = letras[res];
        alert("Te corresponde la letra: " + pos);
      } else {
        alert(
          "El numero no puede ser menor que cero ni puede tener mas de 8 digitos"
        );
      }
      break;
    case 9:
      /*9 - Solicitar al usuario una palabra y mostrar 
      por consola el número de consonantes, vocales y longitud de la palabra. */
      var nombre = prompt("Ingresa tu nombre");
      const vocal = nombre.match(/[aeiou]/gi).length;
      const consonante = nombre.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
      const longitud = nombre.match(/[abcdefghijklmnopqrstuvwxyz]/gi).length;
      console.log(
        "Vocales: " +
          vocal +
          "\nConsonantes: " +
          consonante +
          "\nlongitud: " +
          longitud
      );
      alert(
        "Vocales: " +
          vocal +
          "\nConsonantes: " +
          consonante +
          "\nlongitud: " +
          longitud
      );
      break;
    case 10:
      /*10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"]
       determinar si un color introducido por el usuario a través de un prompt se encuentra
        dentro del array o no. */
      let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
      let age = prompt("Escribe un color");
      var color = "";
      var i = 0;

      for (var i = 0; i < colores.length; i++) {
        if (colores[i] == age) {
          color = "si";
          break;
        } else {
          color = "no";
        }
      }
      if (color == "si") {
        alert("El color SI se encuentra en el array");
      } else {
        alert("El color NO se encuentra en el array");
      }
      break;
  }
});
