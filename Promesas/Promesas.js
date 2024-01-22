function esperarNVeces(n) {
    return new Promise(function (resolve, reject) {
      // Verificamos que n sea un número positivo.
      // esto lo ise porque si el valor de n es negativo o no es un numero
      // la funcion se ejecuta infinitamente
      if (typeof n !== "number" || n <= 0) {
        reject(new Error("El valor de n debe ser un número positivo."));
        return;
      }
  
      function esperar(segundos) {
        setTimeout(() => {
          console.log(`¡He esperado ${segundos} veces!`);
        }, segundos * 1000);
      }
  
      //se inicia el ciclo for para que se ejecute la funcion esperar n veces
      for (let i = 1; i <= n; i++) {
        esperar(i);
      }
    });
  }
  
  const N = 5; //aqui se puede cambiar el numero de veces que se ejecuta la funcion
  
  esperarNVeces(N)
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.error("ERROR:", error.message);
    });