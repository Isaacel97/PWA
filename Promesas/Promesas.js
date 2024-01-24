//Manejo de error
fetch('https://fakestoreapi.com/products/100')
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('No existe el producot');
        }
    })
    .then(console.log)
    .catch(err => {
        console.error('Error en la petición');
        console.error(err);
    })
    