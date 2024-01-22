// Peticion post

let user = {
    name: 'Raul',
    age: 26
}

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error en la peticion');
    console.log(error);
});