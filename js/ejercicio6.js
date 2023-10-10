const libros = [];

function agregarLibro() {
  const titulo = prompt("Ingrese el título del libro:");
  const autor = prompt("Ingrese el autor del libro:");
  const añoPublicacion = prompt("Ingrese el año de publicación del libro:");

  if (titulo && autor && añoPublicacion) {
    libros.push({ titulo, autor, añoPublicacion });
    alert("Libro agregado con éxito.");
  } else {
    alert("Ingrese información válida del libro.");
  }
}

function buscarLibroPorTituloOAutor() {
  const criterioBusqueda = prompt("Ingrese el título o autor del libro a buscar:");
  const librosEncontrados = [];

  for (const libro of libros) {
    if (
      libro.titulo.toLowerCase().includes(criterioBusqueda.toLowerCase()) ||
      libro.autor.toLowerCase().includes(criterioBusqueda.toLowerCase())
    ) {
      librosEncontrados.push(libro);
    }
  }

  if (librosEncontrados.length === 0) {
    alert("No se encontraron libros con el criterio de búsqueda.");
  } else {
    alert("Libros encontrados:");
    for (const libroEncontrado of librosEncontrados) {
      alert(`Título: ${libroEncontrado.titulo}\nAutor: ${libroEncontrado.autor}\nAño de Publicación: ${libroEncontrado.añoPublicacion}`);
    }
  }
}

function mostrarMenu() {
  while (true) {
    const opcion = prompt("Seleccione una opción:\n1. Agregar libro\n2. Buscar libro\n3. Salir");

    switch (opcion) {
      case "1":
        agregarLibro();
        break;
      case "2":
        buscarLibroPorTituloOAutor();
        break;
      case "3":
        return;
      default:
        alert("Opción no válida. Por favor, seleccione una opción válida.");
    }
  }
}

mostrarMenu();
 