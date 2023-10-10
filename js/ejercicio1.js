
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function adivinarNumeroAleatorio() {
  const intento = prompt("Adivina el número entre 1 y 100:");

  

  const numeroUsuario = parseInt(intento);

  if (isNaN(numeroUsuario)) {
    alert("Ingresa un número válido.");
  } else {
    if (numeroUsuario === numeroAleatorio) {
      alert(`¡Felicitaciones! Adivinaste el número ${numeroAleatorio}.`);
    } else if (numeroUsuario < numeroAleatorio) {
      alert("El número es más alto. Intenta nuevamente.");
      adivinarNumeroAleatorio(); 
    } else {
      alert("El número es más bajo. Intenta nuevamente.");
      adivinarNumeroAleatorio(); 
    }
  }
}

adivinarNumeroAleatorio();
