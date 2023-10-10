
function generarTablaMultiplicar(numero, filas) {
    console.log(`Tabla de multiplicar del ${numero} (primeras ${filas} filas):`);
    for (let i = 1; i <= filas && i <= filas; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
   
  function mostrarLibros() {
    const numeroSeleccionado = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));
    const filasAMostrar = parseInt(prompt("Ingrese la cantidad de filas a mostrar:"));
  
    if (!isNaN(numeroSeleccionado) && !isNaN(filasAMostrar)) {
      generarTablaMultiplicar(numeroSeleccionado, filasAMostrar);
    } else {
      alert("Por favor, ingrese números válidos.");
    }
  }
  
  mostrarLibros();
  