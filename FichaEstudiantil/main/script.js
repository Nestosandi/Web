const datos = document.querySelector("#cargar");
function cargarinfo() {
    let i = 0;
    let cont = ""; 
  fetch("Estudiante.json")
    .then((res) => res.json())
    .then((estudiante) => {
      var Estudiantes = Object.values(estudiante.Estudiante);
      for (i = 0; i < Estudiantes.length; i++) {
        console.log(Estudiantes);
        var titulo =`<header><h1 class="title">FICHA ESTUDIANTIL</h1></header>`;
        var foto = `<div class="ficha">
        <img class="imagen" src="${Estudiantes[i].foto}">`;
        var nombre = `<div class="divNombre" > <h1 class="nombre">${Estudiantes[i].nombre}</h1></div> `;
        var carrera = `<div class="divCarrera" > <h2 class="carrera">${Estudiantes[i].carrera}</h2></div>`;
        var correo = `<div class="divCorreo">
        <a href="mailto:${Estudiantes[i].correo}?subject=Contacto_PaginaWeb"><img class="correo" src="/FichaEstudiantil/img/icons8-email-64.png"></a>`;
        var github = `
        <a href="${Estudiantes[i].github}" target="_blank"><img class="correo" src="/FichaEstudiantil/img/icons8-github-64.png"></a>`;
        var linkedin = `
        <a href="${Estudiantes[i].linkedin}" target="_blank"><img class="correo" src="/FichaEstudiantil/img/icons8-linkedin-50.png"></a></div>`;
        var uni = `<div class="divU">
        <h2 class="universidad">${Estudiantes[i].universidad}</h2></div></div>`;
        cont = titulo + foto + nombre + carrera + correo + github+linkedin + uni;
      }
      datos.innerHTML = cont;
    });
}
cargarinfo();