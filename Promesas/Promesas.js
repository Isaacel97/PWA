function promesaConTimeout(promesa, tiempoLimite) {
    return new Promise((resolve, reject) => {
      const temporizador = setTimeout(() => {
        // Si el temporizador se ejecuta antes de que la promesa se resuelva,
        // rechazamos la nueva promesa con un mensaje indicando que se agotó el tiempo.
        reject(new Error('Se ha agotado el tiempo'));
      }, tiempoLimite);
  
      promesa.then((resultado) => {
        // Si la promesa original se resuelve antes de que se agote el tiempo,
        // limpiamos el temporizador y resolvemos la nueva promesa con el resultado.
        clearTimeout(temporizador);
        resolve(resultado);
      }).catch((error) => {
        // Si la promesa original se rechaza, también limpiamos el temporizador
        // y rechazamos la nueva promesa con el mismo error.
        clearTimeout(temporizador);
        reject(error);
      });
    });
  }
  
  // Ejemplo de uso:
  const promesaOriginal = new Promise((resolve) => {
    setTimeout(() => {
      resolve('La promesa se ha resuelto');
    }, 2000); // Esta promesa se resolverá después de 2000 milisegundos (2 segundos).
  });
  
  const tiempoLimite = 2500; // aqui cambiamos el tiempo limite de la promesa
  
  const promesaConLimite = promesaConTimeout(promesaOriginal, tiempoLimite);
  
  promesaConLimite.then((resultado) => {
    console.log(resultado);
  }).catch((error) => {
    console.error(error.message);
  });