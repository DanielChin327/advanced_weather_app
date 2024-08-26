// User types in a city
// The App identifies the city
 // If city exits, will find JSON.
 // If not, make a city not found message

// needs to iterate and provid the five days.

// "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}"
// ex. api.openweathermap.org/data/2.5/forecast?q=tokyo&appid=89638d41ac4d76e85c0eca18872b79bb


// advanced api
//API is free so keep it here.
const apiKey = "89638d41ac4d76e85c0eca18872b79bb";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherCards = document.querySelector(".weather-cards");
const cityNameDisplay = document.querySelector(".city-name");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); // using await will make code wait for the fetch to complet first.
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        weatherCards.innerHTML = "";
        cityNameDisplay.style.display = "none"; // Hide city name on error
    } else {
        const data = await response.json();
        displayWeather(data);
        document.querySelector(".error").style.display = "none";
        cityNameDisplay.style.display = "block"; // Show city name
        cityNameDisplay.textContent = `${data.city.name} 5 Day Weather Report`; // Update city name
    }
}

function displayWeather(data) {
    weatherCards.innerHTML = "";
    const filteredData = data.list.filter((item, index) => index % 8 === 0);
    filteredData.forEach(day => {
        const date = new Date(day.dt_txt); // Converts the date
        const dayName = date.toLocaleDateString(undefined, { weekday: 'long' });
        const celsius = Math.round(day.main.temp - 273.15);
        const fahrenheit = Math.round((celsius * 9/5) + 32);
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="images/${getWeatherIcon(day.weather[0].main)}.png" alt="Weather Icon">
            <h1>${dayName}</h1>
            <p>${celsius}°C / ${fahrenheit}°F</p>
            <p>${day.weather[0].description}</p>
            <p>Humidity: ${day.main.humidity}%</p>
            <p>Wind: ${day.wind.speed} km/h</p>
        `;
        weatherCards.appendChild(card);
    });
}

function getWeatherIcon(weather) {
    switch (weather) {
        case "Clouds": return "clouds";
        case "Clear": return "clear";
        case "Rain": return "rain";
        case "Drizzle": return "drizzle";
        case "Mist": return "mist";
        default: return "clear";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
