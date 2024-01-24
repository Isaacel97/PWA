//Manejo del error con una doble sentencia
fetch('https://fakestoreapi.com/products/1')
    .then(response => {
        response.json().then((data) => {
            console.log(data);
        })
        response.json().then((data) => {
            console.log(data);
        });
    })
    