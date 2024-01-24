//Fetch archivos locales

// Almacena de manera local una imagen dentro de este
// proyecto en la carpeta img realiza una solicitud fetch a esa imagen
// y muestra la imagen en el navegador


const fetchImage = async () => {
    try {
        const response = await fetch('./imgLocal.jpg');
        const blob = await response.blob();
        const img = document.createElement('img');
        img.setAttribute('id', 'img');
        img.src = URL.createObjectURL(blob);
        document.body.appendChild(img);
    } catch (error) {
        console.error(error);
    }
}