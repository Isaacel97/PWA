//Manejo de error
fetch('https://fakestoreapi.com/products/1')
    .then(res => {
        res.json().then(console.log)
    })
    .catch(err => {
        console.error('Error en la petición');
        console.error(err);
    })
    