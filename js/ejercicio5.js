
const preguntasYRespuestas = [
    {
      pregunta: "¿Cuál es la capital de España?",
      respuesta: "Madrid"
    },
    {
      pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
      respuesta: "Miguel de Cervantes Saavedra"
    },
    {
      pregunta: "Quién pintó la Mona Lisa",
      respuesta: "Leonardo da Vinci"
    },
    {
      pregunta: "Cuál es la montaña más alta del mundo",
      respuesta: "Monte Everest"
    },
    {
      pregunta: "En qué año terminó la Segunda Guerra Mundial",
      respuesta: "1945"
    }
  ];
  

  function preguntar() {
    let puntuacion = 0;
  
    for (let i = 0; i < preguntasYRespuestas.length; i++) {
      const respuestaUsuario = prompt(preguntasYRespuestas[i].pregunta);
  
      if (respuestaUsuario.toLowerCase() === preguntasYRespuestas[i].respuesta.toLowerCase()) {
        puntuacion++;
      }
    }
  
    alert(`Puntuación: ${puntuacion} de ${preguntasYRespuestas.length} respuestas correctas`);
  }
  

  preguntar();
  