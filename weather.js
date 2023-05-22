const apikey="988c0b9e71e8bfb66f142671f06cbb26"
const apiurl="http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputBox=document.getElementById('enteredcity');
const searchBtn=document.getElementById('search-btn');
const weathericon=document.querySelector('.weather-icon');

async function weather(city){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&lang=en&appid=988c0b9e71e8bfb66f142671f06cbb26`)
    if (response.status == 404){
        document.querySelector(".err-msg").style.display="block"
        document.querySelector(".weather-info").style.display="none"
    }
    else{
        var weatherdata = await response.json();
        // console.log(weatherdata)
        if(weatherdata.weather[0].main =="Clouds"){
            weathericon.src="Img/clouds.png"
        }
        else if(weatherdata.weather[0].main =="Rain"){
            weathericon.src="Img/rain.png"
        }
        else if(weatherdata.weather[0].main =="Drizzle"){
            weathericon.src="Img/drizzle.png"
        }
        else if(weatherdata.weather[0].main =="Clear"){
            weathericon.src="Img/clear.png"
        }
        else if(weatherdata.weather[0].main =="Mist"){
            weathericon.src="Img/mist.png"
        }

        document.querySelector(".city-name").innerHTML=weatherdata.name
        document.querySelector(".temperature").innerHTML=Math.round(weatherdata.main.temp)+ '°C'
        document.querySelector(".wind").innerHTML=Math.round(weatherdata.wind.speed )+ ' km/hr'
        document.querySelector(".humidity").innerHTML=Math.round(weatherdata.main.humidity)+" %"
        document.querySelector(".weather-info").style.display ="block";
        document.querySelector(".err-msg").style.display="none"
    }
}
 searchBtn.addEventListener('click', ()=>{
    weather(inputBox.value);
 })
