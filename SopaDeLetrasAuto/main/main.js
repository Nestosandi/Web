const btn = document.getElementById("generar");

btn.addEventListener("click", function () {
  document.getElementById("generar").classList.toggle("active");
  document.getElementById("title").innerHTML = "SOPA DE LETRAS";
  // get the reference for the body
  let letras = [
    [
      "T",
      "H",
      "R",
      "R",
      "P",
      "Y",
      "T",
      "H",
      "O",
      "N",
      "V",
      "C",
      "S",
      "A",
      "L",
      "M",
      "G",
      "O",
      "X",
      "O",
    ],
    [
      "B",
      "T",
      "W",
      "W",
      "W",
      "V",
      "N",
      "T",
      "C",
      "P",
      "D",
      "B",
      "A",
      "H",
      "T",
      "M",
      "L",
      "A",
      "M",
      "I",
    ],
    [
      "A",
      "T",
      "E",
      "C",
      "S",
      "S",
      "R",
      "T",
      "Q",
      "S",
      "I",
      "T",
      "O",
      "M",
      "E",
      "M",
      "M",
      "I",
      "L",
      "P",
    ],
    [
      "C",
      "P",
      "B",
      "T",
      "C",
      "D",
      "A",
      "T",
      "A",
      "B",
      "A",
      "S",
      "E",
      "C",
      "V",
      "A",
      "B",
      "N",
      "O",
      "M",
    ],
    [
      "K",
      "A",
      "O",
      "N",
      "S",
      "F",
      "R",
      "O",
      "N",
      "T",
      "E",
      "N",
      "D",
      "I",
      "P",
      "A",
      "Q",
      "W",
      "N",
      "T",
    ],
    [
      "E",
      "W",
      "N",
      "O",
      "S",
      "G",
      "B",
      "P",
      "Y",
      "R",
      "E",
      "B",
      "B",
      "O",
      "R",
      "J",
      "A",
      "V",
      "A",
      "T",
    ],
    [
      "N",
      "O",
      "N",
      "S",
      "V",
      "G",
      "L",
      "A",
      "S",
      "L",
      "I",
      "P",
      "K",
      "N",
      "O",
      "T",
      "L",
      "U",
      "L",
      "M",
    ],
    [
      "D",
      "I",
      "V",
      "M",
      "B",
      "N",
      "E",
      "O",
      "C",
      "I",
      "T",
      "I",
      "E",
      "S",
      "I",
      "G",
      "I",
      "T",
      "Y",
      "Z",
    ],
    [
      "B",
      "S",
      "Q",
      "L",
      "J",
      "A",
      "V",
      "A",
      "S",
      "C",
      "R",
      "I",
      "P",
      "T",
      "S",
      "O",
      "A",
      "D",
      "L",
      "U",
    ],
    [
      "P",
      "H",
      "P",
      "K",
      "E",
      "M",
      "M",
      "A",
      "A",
      "K",
      "N",
      "O",
      "R",
      "M",
      "A",
      "N",
      "L",
      "R",
      "A",
      "Y",
    ],
  ];
  var mybody = document.getElementById("centro");

  // creates <table> and <tbody> elements
  mytable = document.createElement("table");
  mytablebody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 10; i++) {
    // creates a <tr> element
    mycurrent_row = document.createElement("tr");

    for (var j = 0; j < 20; j++) {
      // creates a <td> element
      mycurrent_cell = document.createElement("td");
      // creates a Text Node
      currenttext = document.createTextNode(letras[i][j]);
      // appends the Text Node we created into the cell <td>
      mycurrent_cell.appendChild(currenttext);

      // appends the cell <td> into the row <tr>
      mycurrent_row.appendChild(mycurrent_cell);
    }

    // appends the row <tr> into <tbody>
    mytablebody.appendChild(mycurrent_row);
  }
  mytable.className="Cuadro";
  // appends <tbody> into <table>
  mytable.appendChild(mytablebody);
  // appends <table> into <body>
  mybody.appendChild(mytable);
  // sets the border attribute of mytable to 2;
  mytable.setAttribute("border", "2");

  //lista
  var lista = document.getElementById("lista");
  const contenido = [
    "PHP",
    "SQL",
    "DATABASE",
    "FRONTEND",
    "BACKEND",
    "GIT",
    "NEOCITIES",
    "SVG",
    "JAVA",
    "DIV",
    "HTML",
    "GO",
    "PYTHON",
    "WWW",
    "TCP",
    "HTTP",
    "XML",
    "WEB",
    "CSS",
    "JAVASCRIPT",
  ];
  for (i = 0; i < 20; i++) {
    var E1 = document.createElement("li");
    E1.innerHTML = contenido[i];
    lista.appendChild(E1);
  }
});
