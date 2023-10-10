
function calcularMedia(numeros) {
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    return suma / numeros.length;
  }

  function calcularMediana(numeros) {
    numeros.sort((a, b) => a - b);
    const n = numeros.length;
    if (n % 2 === 0) {
      const medio1 = numeros[n / 2 - 1];
      const medio2 = numeros[n / 2];
      return (medio1 + medio2) / 2;
    } else {
      return numeros[Math.floor(n / 2)];
    }
  }
  
  function calcularDesviacionEstandar(numeros) {
    const media = calcularMedia(numeros);
    const sumatoria = numeros.reduce((total, numero) => total + Math.pow(numero - media, 2), 0);
    const varianza = sumatoria / numeros.length;
    return Math.sqrt(varianza);
  }
  

  function calcularEstadisticas() {
    const entrada = prompt("Ingrese una lista separadas por comas (por ejemplo, 12,15,20,25,30):");
    const numeros = entrada.split(",").map(numero => parseFloat(numero));
  
    if (numeros.some(isNaN)) {
      alert("Ingrese números válidos.");
    } else {
      const media = calcularMedia(numeros);
      const mediana = calcularMediana(numeros);
      const desviacionEstandar = calcularDesviacionEstandar(numeros);
  
      alert(` Media: ${media.toFixed(2)}
  Mediana: ${mediana.toFixed(2)}
  Desviación Estándar: ${desviacionEstandar.toFixed(2)}`);
    }
  }
  
  calcularEstadisticas();
  