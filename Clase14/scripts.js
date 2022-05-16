const btn = document.getElementById("start");
btn.addEventListener("click", function () {
  let x;
  while (true) {
    x = prompt(
      "Ingrese el ejercicio que quires hacer \n 1. Par o impar \n 2. Numero primo \n 3. Factorial \n 4. Array par o impar"
    );
    if (x <= 4) {
      break;
    }
    if (x === null) {
      alert("Se presionó CANCEL");
      break;
    }
  }

  if (x == 1) {
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
  } else if (x == 2) {
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
  } else if (x == 3) {
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
  } else if (x == 4) {
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
  }
});
