//apikey: d908e49f6ec826368605ef3bed6c01ad

//Select Elements

const iconElement= document.querySelector(".weather.icon");
const tempElement =document.querySelector(".tempature-value p");
const descElement = document.querySelector("temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector("notification");

//App Data
const weather = {};

weather.temperature = {
        value: 98,
        unit : "Fahrenheit"
    }

// App CONSTS AND VARS
const KELVIN =273;

//API KEY
const key= "d908e49f6ec826368605ef3bed6c01ad";
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";

}

function setPosition(position){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        //getWeather(latitude,longitude);    

}
function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = '<p> ${error.message} </p>';
}

function displayWeather(){
iconElement.innerHTML=
    '<img src="icons/${weather.iconId}.png"/>';
tempElement.innerHTML=  "98° F"
    '${weather.temperature.value} ° <span>F</span>';
descElement.innerHTML= "Clear sky"
    weather.descrispaption;
locationElement.innerHTML= Houston,US
    '${weather.city}, ${weather.country}';
}

//tempElement.addEventListener("click",function(){

//if(weather.temperature.value === undefined) return;
// if(weather.temperature.unit ==="celsius"){
//     let Fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//     86               
//     fahrenheit = Math.floor(fahrenheit);
//     tempElement.innerHTML = '${fahrenheit}° <span>F</span>';
//     weather.temperature.unit = "fahrenheit";

// }else{
//     tempElement.innerHTML = '${weather.temperature.value}° <span>C</span>';
//     weather.temperature.unit = "celsius";

// }
// });

//api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=d908e49f6ec826368605ef3bed6c01ad
fetch("https://api.openweathermap.org/data/2.5/weather?q=houston&appid=d908e49f6ec826368605ef3bed6c01ad&units=imperial")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.querySelector(".temperature-value").innerHTML="- "+data.main.temp+"°F"
    document.querySelector(".temperature-description").innerHTML=data.weather[0].description
    if(data.weather[0].description=="few clouds"){
        document.body.style.backgroundImage="url('https://media.istockphoto.com/id/162428248/photo/cloudscape.jpg?s=612x612&w=0&k=20&c=9yNkLzvPtJouuJw7XRuvKQ0rD9Dh_UksrKKlvtEpKMg=')"
    }

})