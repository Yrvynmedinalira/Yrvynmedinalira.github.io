fetch("https://api.openweathermap.org/data/2.5/weather?q=Hermosillo,mx&appid=306c8995415c90a3cf3de6db74c437e4&units=imperial")
    .then((response) => response.json())
    .then((jsObject) => {
        let t = parseFloat(jsObject.main.temp);
        let s = parseFloat(jsObject.wind.speed);
        let output = "N/A";
        const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // reference the weather array
        document.getElementById('icon').setAttribute('src', imagesrc); // these two show icon
        document.getElementById('icon').setAttribute('alt', desc);
        document.getElementById('currently').innerHTML = jsObject.weather[0].description;
        document.getElementById('current-temp').innerHTML = Math.round(t) + "&#8457;";
        if (t <= 50 && s >= 3) {
            let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
            output = Math.round(f); 
        };

        document.getElementById('highTemp').innerHTML = jsObject.main.temp_max + "&#8457;";
        document.getElementById("windChill").innerHTML = output + "&#8457;";
        document.getElementById('humidity').innerHTML = jsObject.main.humidity;
        document.getElementById('windSpeedMPH').innerHTML = Math.round(s) + " MPH";
    });
    
    
fetch("https://api.openweathermap.org/data/2.5/forecast?q=Fish Haven,us&appid=306c8995415c90a3cf3de6db74c437e4&units=imperial")
    .then((response) => response.json())
    .then((forecastObject) => {        
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.table(forecast)
        for (let day = 0; day < forecast.length; day++) {

            
            let weatherDay = document.getElementsByClassName('days');
            for (let i = 0; i < weatherDay.length; i++) {
                let longDate = new Date(forecast[day].dt_txt);
                weatherDay[day].textContent = longDate.toLocaleString("en-us", {
                    weekday: "long"
                });
            }
            
            let forecastTemp = document.getElementsByClassName('forecastTemp');
            for (let i = 0; i < forecastTemp.length; i++) {
                forecastTemp[day].innerHTML = forecast[day].main.temp;
            }
            
            let weatherIcon = document.getElementsByClassName("forcastimg");
            for (let i = 0; i < weatherIcon.length; i++) {
                weatherIcon[day].setAttribute("src", `https://openweathermap.org/img/wn/${forecast[day].weather[0].icon}@2x.png`);
                weatherIcon[day].setAttribute("alt", `Icon representing ${forecast[day].weather[0].description}`);
            }
      } 

    });