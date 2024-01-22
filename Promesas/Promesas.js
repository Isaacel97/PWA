const sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
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

//Promisse.all ejecuta todas las prmesas y devuelve unm arreglo con los resultados
// Si una de las promesas falla, falla todo el arreglo
Promise.all([sumarLento(5), sumarRapido(10), true, 'Hola mundo'])
    .then(respuestas => {
        console.log(respuestas);
    })
    .catch(console.log);