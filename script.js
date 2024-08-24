// User types in a city
// The App identifies the city
 // If city exits, will find JSON.
 // If not, make a city not found message

// needs to iterate and provid the five days.

// "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}"
// ex. api.openweathermap.org/data/2.5/forecast?q=tokyo&appid=89638d41ac4d76e85c0eca18872b79bb

const apiKey = "89638d41ac4d76e85c0eca18872b79bb" //API is free so keep it here.
const apiURL = "api.openweathermap.org/data/2.5/forecast?q="


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else{
  var data = await response.json();
  console.log(data)
  var f = Math.round(((data.main.temp) * 9/5) + 32)
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" +` / ${f}°f`;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  }
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  }
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  }

}
searchBtn.addEventListener("click", ()=> {
checkWeather(searchBox.value);
})


searchBox.addEventListener("keypress", (event) => {
if (event.key === "Enter") {
  checkWeather(searchBox.value);
}
});
