//Metodo .clone
fetch('https://fakestoreapi.com/products/1')
    .then(res => {
        res.clone().json().then(data => {
            console.log(data)
        })
        res.clone().json().then(data => {
            console.log(data)
        })
        res.json().then(data => {
            console.log(data)
        })
    })
    