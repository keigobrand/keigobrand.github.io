window.addEventListener("DOMContentLoaded", function() {
    var proyectos = [
      { nombre: "meiga namir", url: "meiga-namir.html" },
      { nombre: "royal lacre", url: "royal-lacre.html" },
      // Agrega más proyectos si es necesario
    ];
  
    var formBuscador = document.querySelector(".Proyecto-buscar-cont");
    var inputBuscador = document.querySelector(".Buscador-proyecto");
  
    inputBuscador.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Evita que se envíe el formulario
  
        var textoBusqueda = inputBuscador.value.toLowerCase();
        var proyectoEncontrado = proyectos.find(function(proyecto) {
          return proyecto.nombre.toLowerCase() === textoBusqueda;
        });
  
        if (proyectoEncontrado) {
          window.location.href = proyectoEncontrado.url;
        } else {
          // Redirecciona a la página de error si no se encuentra el proyecto
          window.location.href = "error.html";
        }
      }
    });
  })