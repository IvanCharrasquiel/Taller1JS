function generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirCaracteresEspeciales) {
    const caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const caracteresNumeros = "0123456789";
    const caracteresEspeciales = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    let caracteresPermitidos = caracteresMinusculas;
  
    if (incluirMayusculas) {
      caracteresPermitidos += caracteresMayusculas;
    }
  
    if (incluirNumeros) {
      caracteresPermitidos += caracteresNumeros;
    }
  
    if (incluirCaracteresEspeciales) {
      caracteresPermitidos += caracteresEspeciales;
    }
  
    let contrasena = "";
    const caracteresLength = caracteresPermitidos.length;
  
    for (let i = 0; i < longitud; i++) {
      const randomIndex = Math.floor(Math.random() * caracteresLength);
      contrasena += caracteresPermitidos.charAt(randomIndex);
    }
  
    return contrasena;
  }

  const longitud = parseInt(prompt("Ingrese la longitud de la contraseña:"));
  const incluirMayusculas = confirm("¿Incluir mayúsculas?");
  const incluirNumeros = confirm("¿Incluir números?");
  const incluirCaracteresEspeciales = confirm("¿Incluir caracteres especiales?");
  
  if (!isNaN(longitud) && (incluirMayusculas || incluirNumeros || incluirCaracteresEspeciales)) {
    const contrasenaGenerada = generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirCaracteresEspeciales);
    alert(`La contraseña generada es: "${contrasenaGenerada}"`);
  } else {
    alert("Por favor, ingrese opciones válidas.");
  }
    