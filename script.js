console.log("Hola api clima.");

async function fetchWeatherData(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  // Realizar la solicitud a la API (fetch petición asíncrona HTTP)
  const response = await fetch(url); // Se usa await para esperar la respuesta si la función es asíncrona, es decir, si la función devuelve una promesa.
  console.log(response); // Mostrar la respuesta en la consola

  const data = await response.json(); // Convertir la respuesta a formato JSON
  console.log(data); // Mostrar los datos en la consola
  console.log(data.elevation);
  console.log(data.current_weather);
  console.log(data.current_weather.temperature);
  return data.current_weather;
}

//fetchWeatherData(25.666815, -100.28233); // Coordenadas de Monterrey, México

// Esta función se ejecuta cuando se hace clic en el botón de obtener clima
async function handleFetchClick() {
  console.log("Boton fetch clickeado"); // Verificar que la función se ejecuta al hacer clic
  // Obtener los valores de latitud y longitud desde los inputs
  const latitude = document.getElementById("latitude-input").value;
  const longitude = document.getElementById("longitude-input").value;
  // Obtener los elementos donde se mostrarán los datos
  const currentTemperature = document.getElementById("temp-display");
  const currentWindSpeed = document.getElementById("wind-display");

  // Definir una variable para almacenar los datos del clima actual por medio de la función fetchWeatherData
  const currentWeather = await fetchWeatherData(latitude, longitude);
  // Actualizar el contenido de los elementos con los datos obtenidos
  currentTemperature.textContent = currentWeather.temperature;
  currentWindSpeed.textContent = currentWeather.windspeed;
}
