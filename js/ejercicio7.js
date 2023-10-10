function calcularInteresCompuesto() {
    const capitalInicial = parseFloat(prompt("Ingrese el capital inicial:"));
    const tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual en porcentaje:"));
    const periodoInversionAnios = parseInt(prompt("Ingrese el período de inversión en años:"));
  
    if (!isNaN(capitalInicial) && !isNaN(tasaInteresAnual) && !isNaN(periodoInversionAnios)) {
      const tasaInteres = tasaInteresAnual / 100;
      const montoFinal = capitalInicial * Math.pow(1 + tasaInteres, periodoInversionAnios);
      alert(`El monto final es de $${montoFinal.toFixed(2)}`);
    } else {
      alert("Por favor, ingrese valores numéricos válidos.");
    }
  }
 
  calcularInteresCompuesto();
   