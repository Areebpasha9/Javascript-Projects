
async function searchWeather(defaultCity) {
    const city = defaultCity || document.getElementById("cityInput").value.trim();
    if (!city) {
        alert("Please enter city name")
        return;
    }
    const goUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=5`;
    // console.log(city);

    const geoResult = await fetch(goUrl);
    const geoData = await geoResult.json();

    console.log(geoData.results);


    if (!geoData.results || geoData.results.length === 0) {
        document.getElementById("cityName").innerText = "City not found";
        document.getElementById("currentWeather").innerText = "";
        document.getElementById("forecast").innerHTML = "";
        return;
    }


    const location = geoData.results.find(r => r.admin1 || r.country || geoData.results[0]);
    // console.log(location);

    const { latitude, longitude, name, country, admin1, country_code } = location;

    document.getElementById("cityName").innerText = `${name}, ${admin1 || ""} ${country}
    `;

    const currWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m,pressure_msl&timezone=auto`;

    const currResult = await fetch(currWeather);
    const currdata = await currResult.json();
    const current = currdata.current;
    console.log(current);


    document.getElementById("currentWeather").innerHTML = `Temperature : ${current.temperature_2m}°C <br>
    Wind Speed💨 :${current.wind_speed_10m} km/h <br>
    Humidity 💧: ${current.relative_humidity_2m}%<br>
   Pressure:🔽${current.pressure_msl} hPa 
    `;

    const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`;

    const forecastResult = await fetch(forecastUrl);
    const forecastData = await forecastResult.json();

    const days = forecastData.daily.time;
    const maxTemps = forecastData.daily.temperature_2m_max;
    const minTemps = forecastData.daily.temperature_2m_min;


    let forecastHTML = "";
    days.forEach((day, i) => {
        forecastHTML += `<div class="day"> 
        <strong> ${day}</strong><br>
        🌡️ Max: ${maxTemps[i]}°C<br>
      🧊 Min: ${minTemps[i]}°C 

        </div>`
    });
    document.getElementById("forecast").innerHTML = forecastHTML;

}
window.onload = () => {
    searchWeather("Delhi");
};