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
        console.error(err || 'Error en la petición');
    })
    