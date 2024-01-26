// Función que ejecuta operaciones asincrónicas de forma secuencial
async function realizarOperacionesAsincronas(funciones) {
    for (const func of funciones) {
      try {
        await func();
      } catch (error) {
        throw error;
      }
    }
  }
  
  // Función que resuelve una promesa dentro de un tiempo límite
  function promesaConTimeout(promesa, tiempoLimite) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId);
        reject("Se ha agotado el tiempo");
      }, tiempoLimite);
  
      promesa
        .then((resultado) => {
          clearTimeout(timeoutId);
          resolve(resultado);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  }
  
  // Función que espera n veces y resuelve con un mensaje
  function esperarNVeces(n) {
    const esperar = (i) => new Promise(resolve => setTimeout(() => resolve(`¡He esperado ${i} veces!`), i * 1000));
  
    const funciones = Array.from({ length: n }, (_, i) => () => esperar(i + 1));
  
    return realizarOperacionesAsincronas(funciones);
  }
  
  // Ejemplo de uso
  async function ejemplo() {
    try {
      // Realizar operaciones asincrónicas secuencialmente
      await realizarOperacionesAsincronas([
        () => promesaConTimeout(Promise.resolve("Primera operación"), 2000),
        () => promesaConTimeout(Promise.reject("Segunda operación fallida"), 1000),
        () => promesaConTimeout(Promise.resolve("Tercera operación"), 3000)
      ]);
  
      // Esperar 3 veces y resolver con un mensaje
      const resultado = await esperarNVeces(3);
      console.log(resultado);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Llamada al ejemplo
  ejemplo();
  