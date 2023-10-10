
const estudiantes = {};

function agregarEstudiante() {
  const nombre = prompt("Ingrese el nombre del estudiante:");
  const edad = parseInt(prompt("Ingrese la edad del estudiante:"));
  const identificacion = prompt("Ingrese el número de identificación del estudiante:");

  if (nombre && !isNaN(edad) && identificacion) {
    estudiantes[identificacion] = { nombre, edad, identificacion };
    alert("Estudiante agregado con éxito.");
  } else {
    alert("Ingrese datos válidos para el estudiante.");
  }
}

function buscarEstudiantePorIdentificacion() {
  const identificacionBuscar = prompt("Ingrese el número de identificación a buscar:");

  if (identificacionBuscar in estudiantes) {
    const estudiante = estudiantes[identificacionBuscar];
    const mensaje = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Número de Identificación: ${estudiante.identificacion}`;
    alert(mensaje);
  } else {
    alert("Estudiante no encontrado.");
  }
}

function mostrarMenu() {
    const opcion = prompt(
      "Selecciona una opción:\n1. Agregar estudiante\n2. Buscar estudiante\n3. Salir"
    );
   
    switch (opcion) {
      case "1":
        agregarEstudiante();
        break;
      case "2":
        buscarEstudiantePorIdentificacion();
        break;
      case "3":
        return; // Salir del menú
      default:
        alert("Ingresa una opción válida.");
    }
  
    mostrarMenu(); // Mostrar el menú nuevamente
  }
  
  // Mostrar el menú al cargar la página
  mostrarMenu();