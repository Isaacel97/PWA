const sumar = (n1 , n2) => {
    return new Promise((resolve, reject) => {
        resolve(n1 + n2);
    });
}

const resta = (n1, n2) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(n1 - n2);            
        }, 1200);
    });
}

const mensaje = (mensaje) => {
    return new Promise((resolve, reject) => {
        resolve(mensaje);
    });
}

// const mensaje = (mensaje) => {
//     return new Promise((resolve, reject) => {
//         reject('Error en la promesa');
//     });
// }
// si una falla todo se detiene

Promise.all([ resta(8, 8), sumar(5, 5), mensaje('Hola mundo')])
    .then(respuestas => {
        console.log(respuestas);
    })
    .catch(console.log);