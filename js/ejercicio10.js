
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }

  function determinarCategoriaIMC(imc) {
    if (imc < 18.5) {
      return "peso bajo";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      return "sobrepeso";
    } else {
      return "obesidad";
    }
  }

  const peso = parseFloat(prompt("Ingrese su peso en kg:"));
  const altura = parseFloat(prompt("Ingrese su altura en metros:"));
  
  if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
    const imc = calcularIMC(peso, altura);
    const categoriaIMC = determinarCategoriaIMC(imc);
    alert(`Tu IMC es ${imc.toFixed(2)}, estás en el rango de ${categoriaIMC}.`);
  } else {
    alert("Por favor, ingrese valores válidos.");
  }
   