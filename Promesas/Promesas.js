// Solicitud a una API con Fetch
fetch(resp => {
    resp.json().then(data => {
        console.log(data);
    });
})