const apiKey = "89638d41ac4d76e85c0eca18872b79bb"
const apiURL = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}"

document.addEventListener('DOMContentLoaded', function() {

const search = document.querySelector('#search')
search.addEventListener("submit", printCity)



})


function printCity(e) {
e.preventDefault()
const searchInput = document.querySelector('#city-name').value
console.log(`City you put: ${searchInput}`)
}
