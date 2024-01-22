const ejecutarConTimeout = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Operación completada despues de ${ms} milisegundos`);
        }, ms);
    });
}

//Uso de la función con timeout
const timeoutLimite = 2000; //2 segundos
ejecutarConTimeout(timeoutLimite)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error("Error: ", error);
    });