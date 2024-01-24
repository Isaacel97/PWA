//Manejo de error
fetch('https://jsonplaceholder.typicode.com/userss')
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('No existe el producto');
        }
    })
    .then(console.log)
    .catch(err => {
        console.error('Error en la petición');
        console.error(err);
    })
    