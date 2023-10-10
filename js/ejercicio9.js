function calcularEstadisticas(calificaciones) {
    if (calificaciones.length === 0) {
      return {
        promedio: 0,
        calificacionMasAlta: null,
        calificacionMasBaja: null
      };
    }
  
    let sumaCalificaciones = 0;
    let calificacionMasAlta = calificaciones[0];
    let calificacionMasBaja = calificaciones[0];
  
    for (let i = 0; i < calificaciones.length; i++) {
      const calificacion = calificaciones[i];
  
      sumaCalificaciones += calificacion;
  
      if (calificacion > calificacionMasAlta) {
        calificacionMasAlta = calificacion;
      }
  
      if (calificacion < calificacionMasBaja) {
        calificacionMasBaja = calificacion;
      }
    }
  
    const promedio = sumaCalificaciones / calificaciones.length;
  
    return {
      promedio: promedio.toFixed(1),
      calificacionMasAlta: calificacionMasAlta,
      calificacionMasBaja: calificacionMasBaja
    };
  }
  
  function obtenerCalificacionesPorTeclado() {
    const input = prompt("Ingrese las calificaciones separadas por comas (por ejemplo, 85,90,78,92,88):");
    const calificaciones = input.split(",").map(parseFloat);
    return calificaciones;
  }
  
  const calificacionesIngresadas = obtenerCalificacionesPorTeclado();
  const estadisticas = calcularEstadisticas(calificacionesIngresadas);
  
  console.log("Promedio:", estadisticas.promedio);
  console.log("Calificación más alta:", estadisticas.calificacionMasAlta);
  console.log("Calificación más baja:", estadisticas.calificacionMasBaja);
  