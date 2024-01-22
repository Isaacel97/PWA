// 1) Una función que imprima un número más uno
console.log('Tarea 1');
const sumMoreOne = (num) => {
    console.log(`Numero: ${num}, Numero + 1: ${num + 1}`)
    console.log('------------------');
}

// 2) Una funcion asincrona
const asyncFunction = async () => {
    console.log('Tarea 2');
    try {
        const res = await sumMoreOne(3);
        console.log(`Numero: 3, Numero + 1: ${res}`);
    } catch (error) {
        console.log(error);
    }
    console.log('------------------');
}

// 3) Imprimir en consola un conteo de 1 al 10 cada 800ms
const conter = async() => {
    console.log('Tarea 3');
    for (let i = 1; i <= 10; i++) {
        setTimeout((index) => {
          console.log('conteo:', index);
          const time = new Date().getTime();
          console.log('Tiempo:', time);
        }, 800 * i, i);
    }
    console.log('------------------');
}

// 4) Mostrar mensaje de error en caso de la iteracion anterior supere 8
const conter2 = () => {
    console.log('Tarea 4');
    try {
        for (let i = 1; i <= 10; i++) {
            if (i > 8) {
                throw new Error('Error: El conteo supero el 8');
            }
            console.log('conteo',i);
        }  
    } catch (error) {
       console.error(error); 
    }
    console.log('------------------');
}

// Imprimir dos funciones de manera asincrona, el programa debe mostrar en terminal el inicio de procesos y el final del proceso
const asyncFunction2 = async () => {
    console.log('Tarea 5');
    console.log('Inicio de proceso');
    const time = 60
    const velocidad = await getVelocidad(time);
    const distancia = await getDistancia(velocidad, time);
    console.log('Velocidad:', velocidad);
    console.log('Distancia:', distancia);
    console.log('Fin de proceso');
    console.log('------------------');
}

const getVelocidad = async (tiempo) => {
    console.log('Init funcion 1');
    const velocidad = 1000 / tiempo;
    console.log('End funcion 1');
    return velocidad;

}

const getDistancia = async (velocidad, tiempo) => {
    console.log('Init funcion 2');
    const distancia = velocidad * tiempo;
    console.log('End funcion 2');
    return distancia;
}

// ------------------------------
const callFunction = async () => {
    sumMoreOne(5);
    await asyncFunction();
    await conter();
    conter2();
    await asyncFunction2();
}

callFunction();



