//Leer archivos html
fetch('not-found.html')
    .then(resp => resp.text())
    .then(html => {
        document.querySelector('.body').innerHTML = html;
    })
    .catch(err => {
        console.error('Error en la peticion')
        console.error(err);
    });

    