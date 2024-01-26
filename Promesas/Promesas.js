// Ejercicio
//Crea una solicitud a la api de fake y pinta los datos en el archivo
//index.html
//Utiliza promesas para en caso de que la solicitud no sea exitosa devuelva el contenido
//del archivo not-found.html con el mensaje de que no se ha podido completar la solicitud

const hacerSolicitud = async () => {
  const apiUrl = 'https://fakestoreapi.com/products/1';
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`No se pudo completar la solicitud. Código de estado: ${response.status}`);
    return await response.json();
  } catch (error) {
    await pintarError(error);
    return { error: error.message };
  }
};

const pintarDatos = (data) => {
  console.log("pintarDatos", data);
  const contenedor = document.body;
  if (!data.error) contenedor.textContent = JSON.stringify(data, null, 2);
};

const pintarError = async (error) => {
  const resp = await fetch('not-found.html');
  let data = await resp.text();
  const message = error.message;
  data = message + data;
  const contenedor = document.body;
  contenedor.innerHTML = data;
};

hacerSolicitud().then(data => {
  pintarDatos(data);
});

