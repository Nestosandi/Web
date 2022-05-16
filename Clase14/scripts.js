const btn = document.getElementById("start");
btn.addEventListener("click", function () {
  let x = prompt(
    "Ingrese el ejercicio que quires hacer \n 1. Par o impar \n 2. Numero primo"
  );

  if (x == 1) {
    /*3 - Solicita un número e imprime todos los números pares e impares desde 1 
    hasta ese número con el mensaje "es par" o "es impar" */
    let n = prompt("Ingrese el limite de numeros");

    /* Para imprimir un dato se puede usar console.log(dato) */
    for (var i = 1; i <= n; i++) {
      if (i % 2 == 0) {
        console.log(i + " es par");
      } else {
        console.log(i + " es impar");
      }
    }
  } else if (x == 2) {
    /*4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
        Un número primo es aquel que solo es divisible por sí mismo y la unidad
     */
    let p = parseInt(prompt("Ingrese el numero que quiere comprobar"));
    let check = true;
    var i = 0;
    for (i = 2; i < p; i++) {
      if (Number.isInteger(p) && p % i == 0) {
        check = false;
      }
    }
    if (check == true){ 
        console.log(p + " es primo");
  } else {
    console.log(p + " no es primo");
  }
}
});
