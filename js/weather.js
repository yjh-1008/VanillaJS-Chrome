const API_KEY="c3b4a737307cd329c8831447c7437800";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const long =  position.coords.longitude;
    console.log(lat,long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            const city=document.querySelector("#weather span:last-child");
            const weather=document.querySelector("#weather span:first-child");
            city.innerText=data.name;
            weather.innerText=`${data.weather[0].main}/${data.main.temp}`;
        });
}
function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);