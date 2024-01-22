const sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error en sumar lento');

        }, 800);
    });
}

const sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(numero + 1);            
        }, 300);
    });
}

//Promisse.race() devuelve la promesa que se resuelva primero
Promise.race(sumarRapido(8), [sumarLento(5)])
    .then(respuestas => {
        console.log(respuestas);
    })
    .catch(console.log);