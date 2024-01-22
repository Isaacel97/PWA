//uso de promesas
// las promesas son objetos que representan la terminacion o el fracaso eventual de una operacion asincrona

let promesaExitosa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("La operacion fue exitosa");
    }, 3000);
});


//manejo de promesas
//then() se ejecuta cuando la promesa se resuelve exitosamente
//catch() se ejecuta cuando la promesa se rechaza

promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});