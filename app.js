window.addEventListener('load',obtenerDatos)

function obtenerDatos (){


  const NASA_key = 'rZZfdq3ZwDqNMqN4MHO2PNfbLMvMkPagqticblRv'
  const ruta = `https://api.nasa.gov/planetary/apod?api_key=${NASA_key}`;

  fetch(ruta)
  .then(respuesta => respuesta.json())
  .then (resultado => mostrarDatos (resultado))
}

function mostrarDatos ({date,explanation, media_type, title, url}) {

  const titulo = document.querySelector ('#titulo');
  titulo.innerHTML = title;
  const fecha = document.querySelector ('#fecha');
  fecha.innerHTML = date;
  const description = document.querySelector ('#description');
  description.innerHTML = explanation;
  const multimedia = document.querySelector ('#c_multimedia');
    multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`
 }

function googleTranslateElementInit (){
  new google.translate.TranslateElement(  {pageLanguage: 'en'},
  'google_translate_element')
}