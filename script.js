// User types in a city
// The App identifies the city
 // If city exits, will find JSON.
 // If not, make a city not found message

// needs to iterate and provid the five days.

// "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}"
// ex. api.openweathermap.org/data/2.5/forecast?q=tokyo&appid=89638d41ac4d76e85c0eca18872b79bb

const apiKey = "89638d41ac4d76e85c0eca18872b79bb" //API is free so keep it here.
const apiURL = "api.openweathermap.org/data/2.5/forecast?q="


document.addEventListener('DOMContentLoaded', function() {

const search = document.querySelector('#search')
search.addEventListener("submit", printCity)



})


function printCity(e) {
e.preventDefault()
const cityInput = document.querySelector('#city-name').value
const apiPull = `https://${apiURL}${cityInput}&appid=${apiKey}`

fetch(apiPull)
  .then(response=> response.json())
  .then(data => console.log(data))





  .catch(error => console.error('Error fetching data:', error));

}
